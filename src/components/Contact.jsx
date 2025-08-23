import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  return (
    <section className="section" id="contact">
      <div className="container-lg text-center">
        <h1 className="mb-4">Let's build something great together</h1>
        <button
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={() => navigate("/contact-form")}
        >
          Contact
        </button>
      </div>
    </section>
  );
}
