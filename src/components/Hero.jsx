export default function Hero() {
  return (
    <section className="section pt-28" id="home">
      <div className="container-lg grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-primary font-medium">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-2">
            Anshul Dhiman
          </h1>
          <p className="mt-4 text-slate-300">
           Aspiring Full-Stack Developer | Java | Spring Boot | React | PostgreSQL
          </p>
          {/* <div className="mt-6 flex gap-3">
            <a href="#projects" className="btn">
              View Projects
            </a>
            <a href="#contact" className="btn bg-white text-slate-900">
              Contact Me
            </a>
          </div> */}
        </div>
        <div className="md:justify-self-end">
          <div className="grid place-items-center">
            <div className="grid place-items-center">
              <div className="rounded-full w-64 h-64 overflow-hidden ring-4 ring-primary/50 shadow-lg shadow-primary/40 hover:scale-105 transition">
                <img
                  src="/WhatsApp Image 2025-08-22 at 1.04.16 PM.jpeg"
                  alt="Anshul Dhiman"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
