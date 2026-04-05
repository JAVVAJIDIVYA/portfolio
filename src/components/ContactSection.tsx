import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ContactSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="py-24 bg-[#f4f4f4]">
      <div className="container mx-auto px-6 text-center" ref={ref}>
        <div className="max-w-2xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-black tracking-tight">Get In Touch</h2>
            <div className="w-20 h-1 bg-black mx-auto mt-4" />
          </div>
          
          <p className="text-xl text-black/70 leading-relaxed font-medium">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-8">
            <a
              href="mailto:javvajidivya333@gmail.com"
              className="flex items-center gap-4 px-8 py-4 rounded-full bg-[#f4f4f4] border border-black/5 shadow-sm text-black font-bold hover:scale-105 transition-transform"
            >
              <Mail size={24} className="text-[#ff3b2f]" />
              <span>javvajidivya333@gmail.com</span>
            </a>
            <a
              href="tel:+916281409115"
              className="flex items-center gap-4 px-8 py-4 rounded-full bg-[#f4f4f4] border border-black/5 shadow-sm text-black font-bold hover:scale-105 transition-transform"
            >
              <Phone size={24} className="text-[#f6a90e]" />
              <span>+91 6281409115</span>
            </a>
          </div>

          <div className="flex justify-center gap-6 pt-8">
            <a
              href="https://www.linkedin.com/in/javvaji-divya-2b1330340/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full bg-[#f4f4f4] border border-black/5 shadow-sm flex items-center justify-center text-black hover:scale-110 transition-transform"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://github.com/JAVVAJIDIVYA"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full bg-[#f4f4f4] border border-black/5 shadow-sm flex items-center justify-center text-black hover:scale-110 transition-transform"
            >
              <Github size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
