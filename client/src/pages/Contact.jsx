import React, { useState } from "react";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const [loading, setLoading] = useState(false);

  
//  const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     const res = await fetch("http://localhost:5000/api/contact", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });

//     const data = await res.json();

//     if (res.ok) {
//       alert("Message sent successfully 🚀");
//       setFormData({ name: "", email: "", message: "" });
//     } else {
//       alert(data.message || "Something went wrong");
//     }
//   } catch (error) {
//     alert("Server error");
//   }
// };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.message) {
    toast.error("Please fill all fields");
    return;
  }

  try {
    setLoading(true);

    const res = await fetch( `${import.meta.env.VITE_API_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    toast.success("Message sent successfully 🚀");

    setFormData({ name: "", email: "", message: "" });
  } catch (err) {
    toast.error(err.message || "Failed to send message");
  } finally {
    setLoading(false);
  }
};


  return (
    <section id="contact" className="min-h-screen bg-[#0A192F] text-white flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden">
      {/* Floating Terminal Prompt */}
      <div className="absolute top-6 left-6 text-cyan-400 font-mono text-sm">
        <span>{"> "}</span>
        <Typewriter
          words={["Send me a message"]}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={80}
          deleteSpeed={0}
          delaySpeed={2000}
        />
      </div>

      <h2 className="text-4xl font-bold mb-12 text-center">
        Let’s <span className="text-cyan-400">Build Something</span> Together
      </h2>

      <div className="flex flex-col md:flex-row gap-12 w-full max-w-5xl">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 flex flex-col gap-4 bg-[#1E1E1E] p-8 rounded-2xl shadow-lg border border-gray-700"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="bg-[#0A192F] p-3 rounded-lg border border-gray-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 outline-none transition"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="bg-[#0A192F] p-3 rounded-lg border border-gray-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 outline-none transition"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="bg-[#0A192F] p-3 rounded-lg border border-gray-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 outline-none transition"
            required
          />
          {/* <button
            type="submit"
            className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold py-3 rounded-xl mt-2 transition-all"
          >
            Send Message
          </button> */}
          <button
  type="submit"
  disabled={loading}
  className={`py-3 rounded-xl font-semibold transition-all ${
    loading
      ? "bg-gray-500 cursor-not-allowed"
      : "bg-cyan-400 hover:bg-cyan-500 text-black"
  }`}
>
  {loading ? "Sending..." : "Send Message"}
</button>

        </form>

        {/* Contact Info */}
        <div className="flex-1 flex flex-col gap-6 justify-center">
          <h3 className="text-xl font-semibold">Contact Info</h3>
          {[{
            icon: Mail, text: "rahulgupta97668@gmail.com", link: "mailto:rahulgupta97668@gmail.com"
          },{
            icon: Linkedin, text: "linkedin.com/in/rahulgupta", link: "https://www.linkedin.com/in/rahul-gupta-65759b276/"
          },{
            icon: Github, text: "github.com/myscreencode18", link: "https://github.com/myscreencode18?tab=repositories"
          },{
            icon: Instagram, text: "instagram.com/rahul183_", link: "#"
          }].map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:scale-110 transition-transform text-gray-300 hover:text-cyan-400"
              title={item.text}
            >
              <item.icon className="text-cyan-400" />
              <span>{item.text}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
