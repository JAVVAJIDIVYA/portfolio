import { GraduationCap } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const education = [
  {
    degree: "B.Tech in Computer Science",
    school: "Vignan's Lara Institute of Technology",
    year: "2023 – 2027",
    highlight: "CGPA: 9.09 / 10",
  },
  {
    degree: "Intermediate",
    school: "Narayana Junior College",
    year: "2022 – 2023",
    highlight: "Marks: 951 / 1000",
  },
  {
    degree: "SSC",
    school: "Bhashyam Public School",
    year: "2021",
    highlight: "Marks: 600 / 600",
  },
];

const AboutSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-24 bg-[#f4f4f4]">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black tracking-tight">About Me</h2>
            <div className="w-20 h-1 bg-black mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <p className="text-xl text-black/80 leading-relaxed font-medium">
                I'm a Computer Science undergraduate with hands-on experience in Python, Django, Flask, SQL, HTML, CSS, and JavaScript. I specialize in building responsive web applications and have a strong interest in backend development and REST APIs.
              </p>
              <p className="text-xl text-black/80 leading-relaxed font-medium">
                I've developed real-world and ML-based projects with deployment experience. My expertise includes authentication, debugging, and Agile methodologies, allowing me to deliver high-quality software solutions.
              </p>
            </div>

            <div className="space-y-12">
              <h3 className="text-3xl font-bold text-black tracking-tight mb-8">Education</h3>
              <div className="space-y-12">
                {education.map((edu, i) => (
                  <div key={i} className="relative pl-8 border-l-2 border-black/10 hover:border-black transition-colors">
                    <p className="text-sm font-bold text-black/40 uppercase tracking-widest mb-2">{edu.year}</p>
                    <h4 className="text-2xl font-bold text-black mb-1">{edu.degree}</h4>
                    <p className="text-lg text-black/60 font-bold mb-2">{edu.school}</p>
                    <span className="inline-block text-sm font-black bg-white text-black px-4 py-1.5 rounded-full border border-black/10 shadow-sm">
                      {edu.highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
