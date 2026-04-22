import { ArrowDown } from "lucide-react";
import { resumePath } from "@/config/site";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center bg-[#f4f4f4] py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
          {/* Profile Image Circle */}
          <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-xl">
            <img 
              src={`${import.meta.env.BASE_URL}headshot.jpg.jpeg`} 
              alt="Javvaji Divya" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* Text Content */}
          <div className="max-w-lg space-y-4 text-center md:text-left">
            <p className="text-xl font-medium text-black/60 tracking-tight">
              Hello, I'm
            </p>
            
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-[#2563eb] leading-tight tracking-tighter">
                Javvaji Divya
              </h1>
              <p className="text-lg text-black/80 leading-relaxed font-medium">
                A passionate Computer Science Undergraduate and Full-Stack Developer dedicated to building scalable, efficient, and user-centric web solutions. I specialize in Python and Django, thriving on solving complex backend challenges and bringing creative ideas to life through code.
              </p>
            </div>

            {/* Circular Buttons */}
            <div className="flex flex-wrap gap-6 justify-center md:justify-start pt-4">
              <a
                href={resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-[#f6a90e] border-2 border-black/10 flex items-center justify-center text-black font-bold text-lg hover:scale-110 transition-transform shadow-lg"
              >
                Resume
              </a>
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-[#ff3b2f] border-2 border-black/10 flex items-center justify-center text-black font-bold text-lg hover:scale-110 transition-transform shadow-lg"
              >
                Projects
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-[#80d1d4] border-2 border-black/10 flex items-center justify-center text-black font-bold text-lg hover:scale-110 transition-transform shadow-lg"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
