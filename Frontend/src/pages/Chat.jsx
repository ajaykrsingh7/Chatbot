import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { EventSourcePolyfill } from "event-source-polyfill";

function Chat() {
  const [username, setUsername] = useState("");
  const [stream, setStream] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const outputRef = useRef(null);

  const formatToMarkdown = (raw) => {
    if (!raw) return "";

    let formatted = raw
      .replace(/\r\n|\r/g, "\n")
      .replace(/(\w)\.(\w)/g, "$1§DOT§$2")
      .replace(/([a-z0-9])\.(\s*)([A-Z])/g, "$1.\n\n$3")
      .replace(/§DOT§/g, ".")
      .replace(/^([A-Z][^\n]{3,})\n/gm, "\n### $1\n")
      .replace(/:\s*\n(?=\w)/g, ":\n- ")
      .replace(/^\s*[\*\-]\s+/gm, "- ")
      .replace(/^(#+ .+)/gm, "\n$1\n")
      .replace(/\n{3,}/g, "\n\n")
      .replace(/[ \t]+$/gm, "")
      .trim();

    return formatted;
  };

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [stream]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/auth/me", {
          withCredentials: true,
        });
        setUsername(res.data?.username || "Guest");
      } catch (err) {
        navigate("/chat");
        // navigate("/login");
      }
    };
    fetchUser();
  }, []);

  
  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:3000/api/auth/logout",
        {},
        { withCredentials: true }
      );
      navigate("/"); 
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  const handleSubmitPrompt = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setStream("");
    setIsStreaming(true);
    setError("");

    const eventSource = new EventSourcePolyfill(
      `http://localhost:3000/api/chat/generate?q=${encodeURIComponent(query)}`,
      {
        withCredentials: true,
      }
    );

    eventSource.onmessage = (event) => {
      const rawText = event.data;
      const markdownText = formatToMarkdown(rawText);
      setStream((prev) => prev + "\n" + markdownText);
    };

    eventSource.addEventListener("done", () => {
      eventSource.close();
      setIsStreaming(false);
    });

    eventSource.onerror = (err) => {
      console.error("SSE error:", err);
      setError("Something went wrong. Please try again.");
      eventSource.close();
      setIsStreaming(false);
    };

    setQuery("");
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 bg-[#1B4332] text-white">
        <div className="flex items-center gap-3">
          <img className="h-14 w-14" src="/assets/logo125.webp" alt="logo" />
          <h1 className="text-3xl font-bold tracking-wide text-white">
            AyurvedaAI
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <span>
            Hello, <strong className="text-white">{username}</strong>
          </span>
          <button
            onClick={() => navigate("/")}
            className="bg-[#52B788] hover:bg-[#40916C] text-white px-4 py-2 rounded-md font-semibold cursor-pointer transition duration-300"
          >
            Home
          </button>
          <button
            onClick={() => navigate("/about")}
            className="bg-[#52B788] hover:bg-[#40916C] text-white px-4 py-2 rounded-md font-semibold cursor-pointer transition duration-300"
          >
            About Us
          </button>
          <button
            onClick={handleLogout}
            className="bg-[#52B788] hover:bg-[#40916C] text-white px-4 py-2 rounded-md font-semibold cursor-pointer transition duration-300"
          >
            Logout
          </button>
        </div>
      </header>

      
      <main className="flex-1 flex flex-col items-center p-6 bg-gradient-to-b from-[#344e41] to-[#588157]">
        <form
          onSubmit={handleSubmitPrompt}
          className="w-full max-w-3xl flex gap-3 mb-4"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Namaste! What would you like to know about Ayurveda today?"
            className="flex-1 px-4 py-2 rounded-md text-black bg-white z-50"
            disabled={isStreaming}
          />
          <button
            type="submit"
            className="bg-[#A3B18A] hover:bg-[#6A994E] text-white px-6 py-2 rounded-md font-bold cursor-pointer transition duration-300"
            disabled={isStreaming}
          >
            {isStreaming ? "Thinking..." : "Send"}
          </button>
        </form>

        {error && <div className="text-red-400 mb-2">{error}</div>}

        <div
          ref={outputRef}
          className={`w-full max-w-3xl h-[70vh] rounded-md p-4 overflow-y-auto text-base leading-relaxed ${
            stream
              ? "bg-gray-900 text-white prose prose-invert"
              : "bg-[#e9f5db] text-[#1b4332] border border-[#95d5b2] shadow-md"
          }`}
        >
          {stream ? (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{stream}</ReactMarkdown>
          ) : (
            <p className="text-lg font-medium">
              Enter a prompt to get an AI-powered response from{" "}
              <strong>AyurvedaAI</strong>...
            </p>
          )}
        </div>
      </main>
    </div>
  );
}

export default Chat;

