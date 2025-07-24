import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

function About() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("User");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.username) {
      setUsername(storedUser.username);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#e9f5db] to-[#c7f9cc] text-gray-800 font-sans ">

      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 bg-[#1B4332] text-white mb-10 ">
        <div className="flex items-center gap-3">
          <img className="h-14 w-14" src="/assets/logo125.webp" alt="logo" />
          <h1 className="text-3xl font-bold tracking-wide text-white">AyurvedaAI</h1>
        </div>
        <div className="flex items-center gap-4">
          
          <button
            onClick={() => navigate("/")}
            className="bg-[#52B788] hover:bg-[#40916C] text-white px-4 py-2 rounded-md font-semibold cursor-pointer transition duration-300"
          >
            Home
          </button>
          <button
            onClick={() => navigate("/chat")}
            className="bg-[#52B788] hover:bg-[#40916C] text-white px-4 py-2 rounded-md font-semibold cursor-pointer transition duration-300"
          >
            Chat Now
          </button>
          <button
            onClick={handleLogout}
            className="bg-[#52B788] hover:bg-[#40916C] text-white px-4 py-2 rounded-md font-semibold cursor-pointer transition duration-300"
          >
            Logout
          </button>
        </div>
      </header>

      <div className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <div className="flex justify-center items-center">
            <img src="/assets/logo125.webp" alt="Logo" className="h-15 w-15" />
            <h1 className="text-4xl sm:text-5xl font-bold text-green-800">About Ayurveda AI</h1>
            <img src="/assets/logo125.webp" alt="Logo" className="h-15 w-15" />
          </div>
          <p className="mt-4 text-lg text-gray-700">
            Bridging Ancient Wisdom with Modern Intelligence
          </p>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-green-700 mb-3">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed">
            Ayurveda AI is a digital wellness platform designed to provide personalized Ayurvedic
            consultations using cutting-edge artificial intelligence. Our platform integrates thousands
            of years of Ayurvedic principles with the power of AI to offer customized remedies,
            diet plans, dosha analysis, and holistic lifestyle suggestions.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-green-700 mb-3">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            To make ancient Ayurvedic wisdom accessible and affordable to everyone through intelligent,
            accurate, and personalized AI-driven recommendations.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-green-700 mb-3">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            To become the world's leading platform for AI-powered holistic health rooted in Ayurvedic tradition.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-green-700 mb-3">What We Offer</h2>
          <ul className="list-disc ml-6 text-gray-700 leading-relaxed">
            <li>Personalized Ayurvedic consultation</li>
            <li>Dosha (body constitution) analysis</li>
            <li>Natural remedies for common ailments</li>
            <li>Diet and lifestyle guidance based on your dosha</li>
            <li>24/7 AI-powered health assistant</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-green-700 mb-3">Meet Our Team</h2>
          <p className="text-gray-700 leading-relaxed">
            Our team consists of certified Ayurvedic practitioners, AI engineers, and passionate
            wellness advocates committed to combining health science and technology for your well-being.
          </p>
          <div className="flex justify-center items-center gap-40 pt-5">
            <div className="text-center">
              <img className="h-40 w-40" src="/assets/amit.png" alt="Amit" />
              <p className="font-bold text-black mt-2">Amit Kumar</p>
            </div>
            <div className="text-center">
              <img className="h-40 w-40" src="/assets/aj.png" alt="Ajay" />
              <p className="font-bold text-black mt-2">Ajay Kumar Singh</p>
            </div>
            <div className="text-center">
              <img className="h-40 w-40" src="/assets/aman.png" alt="Aman" />
              <p className="font-bold text-black mt-2">Aman Singh</p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-40 pt-5">
            <div className="text-center">
              <img className="h-40 w-40" src="/assets/divy.png" alt="Divy" />
              <p className="font-bold text-black mt-2">Divyanshu Singh</p>
            </div>
            <div className="text-center">
              <img className="h-40 w-40" src="/assets/modi.png" alt="Modi" />
              <p className="font-bold text-black mt-2">Dharmendar Modi</p>
            </div>
            <div className="text-center">
              <img className="h-40 w-40" src="/assets/manish.png" alt="Manish" />
              <p className="font-bold text-black mt-2">Manish Kumar</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-green-700 mb-3">Contact Us</h2>
          <p className="text-gray-700">📞 Phone: <strong>9523599608,7461086575</strong></p>
          <p className="text-gray-700">📧 Email: <strong>help@ayurvedaai.io</strong></p>
        </section>
      </div>

      {/* Footer */}
      <footer className=" bg-green-100 mt-16 py-8 px-4 text-sm text-gray-700">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div>
            <h4 className="font-semibold text-black text-lg mb-2"><strong>Contact Us</strong></h4>
            <p>Phone: 9523599608,7461086575</p>
            <p>E-mail: help@ayurvedaai.io</p>
          </div>
          <div>
            <h4 className="font-semibold text-black text-lg mb-2"><strong>Legal</strong></h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
          <div className="flex justify-center items-center flex-col text-right">
            <h4 className="text-black text-lg font-semibold mb-2"><strong>Follow us on</strong></h4>
            <div className="flex gap-4 text-2xl">
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"
                className="hover:text-blue-400 transition-colors">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"
                className="hover:text-pink-400 transition-colors">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"
                className="hover:text-blue-500 transition-colors">
                <FaFacebook />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer"
                className="hover:text-sky-400 transition-colors">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-6 text-black border-t border-gray-300 pt-4">
          © 2025 Ayurveda.AI. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default About;







