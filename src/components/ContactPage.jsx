// src/components/ContactForm.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSending, setIsSending] = useState(false); // ✅ track sending state

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true); // ⏳ set sending state

    const serviceID = "service_ao5s62o";
    const templateID = "template_144agqu";
    const publicKey = "v98tqXossp6wZPFS9";

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(
        () => {
          alert("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setIsSending(false); // ✅ reset sending state
        },
        (err) => {
          console.error("FAILED...", err);
          alert("❌ Failed to send. Try again.");
          setIsSending(false); // ✅ reset on error too
        }
      );
  };

  return (
    <section className="section py-12" id="contact-form">
      <div className="max-w-lg mx-auto bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">Contact Me</h2>

        {/* 👀 Live Preview */}
        {formData.name && (
          <p className="text-sm mb-2 text-black">Hello <b>{formData.name}</b> 👋</p>
        )}
        {formData.email && (
          <p className="text-sm mb-4 text-black">
            We’ll reply to <b className="text-black">{formData.email}</b>
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg bg-white text-gray-900 dark:bg-gray-800 dark:text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg bg-white text-gray-900 dark:bg-gray-800 dark:text-white"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg bg-white text-gray-900 dark:bg-gray-800 dark:text-white"
          />

          <button
            type="submit"
            disabled={isSending} // 🚫 disable button while sending
            className={`w-full p-3 rounded-lg transition ${
              isSending
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
          >
            {isSending ? "Sending..." : "Send"} {/* ✅ dynamic text */}
          </button>
        </form>

        {/* 🔙 Back to Home Button */}
        <button
          onClick={() => navigate("/")}
          className="w-full mt-4 bg-gray-500 text-white p-3 rounded-lg hover:bg-gray-600 transition"
        >
          Back to Home
        </button>
      </div>
    </section>
  );
}
