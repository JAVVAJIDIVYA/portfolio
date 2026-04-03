import { ArrowDown } from "lucide-react";
import { resumePath } from "@/config/site";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-background via-secondary to-background">
      {/* Decorative circles */}
      <div className="absolute top-20 right-[20%] w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="absolute bottom-20 left-[10%] w-48 h-48 rounded-full bg-primary/5 blur-2xl animate-float-delayed" />

      <div className="container mx-auto px-6 pt-24 pb-16">
        <div className="max-w-2xl mx-auto text-center space-y-6 fade-in">
          <p className="text-primary font-medium tracking-wide text-sm uppercase">Hi there, I am</p>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Madithati<br />Induja
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-foreground/80">
            Software Engineer & SAP Specialist
          </p>
          <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
            Detail-oriented Computer Science professional focused on enterprise systems, full-stack development, and data-driven analysis.
          </p>
          <div className="flex gap-4 pt-2 justify-center">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:brightness-110 transition-all"
            >
              View My Work
            </button>
            <a
              href={resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-accent transition-all"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-muted-foreground" size={24} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
