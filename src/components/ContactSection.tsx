import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ContactSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6 text-center" ref={ref}>
        <h2 className="text-3xl font-bold text-foreground mb-2">Get In Touch</h2>
        <div className="w-12 h-1 bg-primary rounded mb-8 mx-auto" />
        <p className="text-muted-foreground mb-10 max-w-md mx-auto">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <a
            href="mailto:madithatiinduja@gmail.com"
            className="flex items-center gap-3 px-5 py-3 rounded-lg border border-border hover:border-primary/40 text-foreground hover:text-primary transition-all"
          >
            <Mail size={18} />
            <span className="text-sm">madithatiinduja@gmail.com</span>
          </a>
          <a
            href="tel:+919390719199"
            className="flex items-center gap-3 px-5 py-3 rounded-lg border border-border hover:border-primary/40 text-foreground hover:text-primary transition-all"
          >
            <Phone size={18} />
            <span className="text-sm">+91 9390719199</span>
          </a>
        </div>

        <div className="flex justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/madithati-induja-03999a354/?skipRedirect=true"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/madithatiinduja"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
