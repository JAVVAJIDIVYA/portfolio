import { Code2, Globe, Database, Cpu } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python", "SQL", "JavaScript", "C"],
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: ["Django", "Flask", "REST API", "Responsive Design", "HTML/CSS"],
  },
  {
    title: "Databases & Tools",
    icon: Database,
    skills: ["SQLite", "MySQL", "Git", "GitHub", "Vercel"],
  },
  {
    title: "Core & Soft Skills",
    icon: Cpu,
    skills: ["Data Structures", "Debugging", "Problem Solving", "Leadership"],
  },
];

const SkillsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="py-24 bg-[#f4f4f4]">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-black tracking-tight">Technical Skills</h2>
          <div className="w-20 h-1 bg-black mx-auto mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="space-y-6 text-center md:text-left"
            >
              <div className="w-16 h-16 bg-[#f4f4f4] rounded-full flex items-center justify-center mx-auto md:mx-0 shadow-sm border border-black/5">
                <cat.icon size={32} className="text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black">{cat.title}</h3>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-4 py-2 bg-[#f4f4f4] text-black font-bold rounded-md border border-black/5 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
