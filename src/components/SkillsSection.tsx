import { Code2, Globe, Database, Cpu } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python", "Java", "SAP ABAP", "C", "C++"],
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: ["React", "Node.js", "Flask", "HTML/CSS", "JavaScript"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["SQL", "MySQL", "MongoDB", "PostgreSQL"],
  },
  {
    title: "Specialized",
    icon: Cpu,
    skills: ["SAP Security", "AI/ML", "Data Analytics", "Cybersecurity", "GenAI"],
  },
];

const SkillsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="py-24 bg-card">
      <div className="container mx-auto px-6" ref={ref}>
        <h2 className="text-3xl font-bold text-foreground mb-2">Tech Stack</h2>
        <div className="w-12 h-1 bg-primary rounded mb-12" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="p-6 rounded-xl border border-border bg-background hover:border-primary/40 transition-all group"
            >
              <cat.icon size={28} className="text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground mb-3">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground font-medium"
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
