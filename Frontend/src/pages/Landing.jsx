import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import icon from "./icon .webp";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#001d3d] to-[#000814] text-white font-sans">
      <header className="flex justify-between items-center px-5 max-w-8xl mx-auto">
        <div className=" flex justify-center items-center gap-3">
          <img
            src={icon}
            style={{ height: "100px", width: "50px", objectFit: "contain" }}
            alt="icon"
          />

          <h1 className="text-3xl font-bold tracking-wide text-white">
            <strong>Ayurveda AI</strong>
          </h1>
        </div>
        <nav className="flex gap-5 text-xl text-gray-300 ">
          <div className="border p-2 rounded-md ">
            <Link to="/about" className="hover:text-white">
              <strong>About Us</strong>
            </Link>
          </div>

          <div className="border p-2 rounded-md ">
            <Link to="/login" className="hover:text-white">
              <strong>Login</strong>
            </Link>
          </div>
          <div className="border p-2 rounded-md ">
            <Link to="/register" className="hover:text-white">
              <strong>Register</strong>
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center px-6 py-16 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold max-w-4xl leading-tight">
          Revolutionizing <span className="text-green-400">healthcare</span>{" "}
          with{" "}
          <div className="flex items-center justify-center gap-2 text-white text-6xl font-bold pt-5">
            <FaBrain className="text-purple-600 animate-pulse" />
            <span className="bg-gradient-to-r from-red-600 to-yellow-400 text-transparent bg-clip-text">
              AI
            </span>
          </div>
        </h2>

        <p className="text-yellow-300 mt-6 max-w-2xl text-lg font-semibold">
          <Typewriter
            words={[
              `प्राचीन आयुर्वेदिक ज्ञान अब AI के साथ।
  व्यक्तिगत सलाह, प्राकृतिक उपचार हर समय उपलब्ध।
  AI-powered आयुर्वेदिक जीवनशैली अभी अपनाएं।`,
            ]}
            loop={0} // 0 = infinite
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={30}
            delaySpeed={2500}
          />
        </p>

        <p className="text-gray-300 mt-6 max-w-2xl text-lg">
          Ayurveda AI is your personal Ayurvedic consultant—available anytime.
          Get personalized remedies, dosha analysis, diet plans, and holistic
          wellness guidance in seconds.
        </p>
        <Button
          onClick={() => navigate("/chat")}
          className="mt-8 bg-purple-600 hover:bg-purple-700 px-6 py-3 text-lg rounded-xl cursor-pointer"
        >
          Ask Now
        </Button>

        <section className="mt-20 w-full max-w-6xl px-4">
          <h3 className="text-3xl font-bold text-white text-center mb-10">
            Key Benefits of Ayurveda AI
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            
            <div className="bg-[#002244] rounded-xl p-6 text-center shadow-md hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-3">🧘‍♂️</div>
              <h4 className="text-xl font-semibold text-white mb-2">
                Dosha Analysis
              </h4>
              <p className="text-gray-300 text-sm">
                Understand your body type – Vata, Pitta, or Kapha using AI.
              </p>
            </div>

            
            <div className="bg-[#002244] rounded-xl p-6 text-center shadow-md hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-3">🌿</div>
              <h4 className="text-xl font-semibold text-white mb-2">
                Personalized Remedies
              </h4>
              <p className="text-gray-300 text-sm">
                Get natural herbal treatments tailored to your symptoms.
              </p>
            </div>

            
            <div className="bg-[#002244] rounded-xl p-6 text-center shadow-md hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-3">🍵</div>
              <h4 className="text-xl font-semibold text-white mb-2">
                Diet & Lifestyle Plans
              </h4>
              <p className="text-gray-300 text-sm">
                Custom Ayurvedic diet suggestions and daily habits.
              </p>
            </div>

            
            <div className="bg-[#002244] rounded-xl p-6 text-center shadow-md hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-3">🕐</div>
              <h4 className="text-xl font-semibold text-white mb-2">
                24/7 Access
              </h4>
              <p className="text-gray-300 text-sm">
                No appointments. Get instant advice anytime, anywhere.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-24 w-full max-w-4xl px-4 mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          
          <div className="md:w-1/2 ">
            <h3 className="text-3xl font-bold text-white mb-4 flex items-center gap-2 ">
              🧠 How AI Powers Ayurveda
            </h3>
            <p className="text-gray-300 text-base leading-relaxed ">
              Combining ancient Ayurvedic wisdom with cutting-edge AI
              technology, we analyze your symptoms, lifestyle, and environment
              to offer precise natural solutions. Our system evolves with data
              to serve you better, naturally.
            </p>
          </div>

          <div className="transition-transform duration-300 hover:scale-105 w-[250px] md:w-[300px] h-[180px] md:h-[200px] ">
            <video
              src="https://cdnl.iconscout.com/lottie-pack/preview-file/free-man-leg-exercises-351239@0.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="rounded-xl w-full max-w-xl shadow-md pointer-events-none"
            />
          </div>
        </section>

        <section className="mt-24 px-4 max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-white text-center mb-10">
            What Our Users Say
          </h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            
            <div className="bg-[#002244] rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="User"
                  className="w-12 h-12 rounded-full border"
                />
                <div>
                  <h4 className="text-white font-semibold">Anjali Sharma</h4>
                  <p className="text-gray-400 text-sm">Delhi, India</p>
                </div>
              </div>

             
              <div className="flex gap-1 text-yellow-400 text-lg mb-2">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>

              <p className="text-gray-300 italic">
                “Helped me fix digestion issues with natural remedies!”
              </p>
            </div>

            
            <div className="bg-[#002244] rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="User"
                  className="w-12 h-12 rounded-full border"
                />
                <div>
                  <h4 className="text-white font-semibold">Rohit Verma</h4>
                  <p className="text-gray-400 text-sm">Mumbai, India</p>
                </div>
              </div>

              <div className="flex gap-1 text-yellow-400 text-lg mb-2">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <p className="text-gray-300 italic">
                “Love the simple, clean advice — feels like talking to a real
                vaidya.”
              </p>
            </div>

            
            <div className="bg-[#002244] rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  alt="User"
                  className="w-12 h-12 rounded-full border"
                />
                <div>
                  <h4 className="text-white font-semibold">Sneha Mukherjee</h4>
                  <p className="text-gray-400 text-sm">Kolkata, India</p>
                </div>
              </div>
              <div className="flex gap-1 text-yellow-400 text-lg mb-2">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <p className="text-gray-300 italic">
                “Ayurveda AI made daily wellness so effortless. Highly
                recommended!”
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#011627] text-gray-400 mt-10 px-8 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center text-sm gap-8 md:gap-0">
          <div className="text-left text-black text-white">
            <div className="flex items-center gap-3">
              <img className="h-10 w-10" src={icon} alt="logo" />
              <h1 className="text-lg  tracking-wide text-white text-bold">
                <strong>Contact us</strong>
              </h1>
            </div>
            <p>Phone: 9523599608,7461086575</p>
            <p>E-mail: help@ayurveda.io</p>
          </div>

          <div className="text-center text-white">
            <h4 className="text-white text-lg font-semibold mb-2">
              <strong>Legal</strong>
            </h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="text-white text-lg font-semibold mb-2">
              Follow us on
            </h4>

            <div className="flex gap-4 text-2xl">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-400 transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-500 transition-colors"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-sky-400 transition-colors"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-10  border-t border-gray-700 pt-4 text-sm text-white">
          © 2025 Ayurveda.AI. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Landing;
