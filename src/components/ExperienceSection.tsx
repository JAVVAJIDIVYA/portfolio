import { Briefcase, Award } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const experiences = [
  {
    role: "Cybersecurity & GenAI Intern",
    company: "VOIS (Vodafone Intelligent Solutions)",
    period: "2026",
  },
  {
    role: "AI/ML Intern",
    company: "Infosys Springboard",
    period: "2026",
    description: "Developed AI-powered solutions and contributed to machine learning model training and deployment.",
  },
];

const certifications = [
  "Cisco – Cybersecurity Essentials",
  "Cisco – Data Analytics",
  "Cisco – Networking Basics",
  "Modern AI",
  "Data Science",
  "Deloitte Job Simulation – Data Analytics",
  "Deloitte Job Simulation – Technology",
  "Deloitte Job Simulation – Cyber Security",
  "Udemy – Full Stack Web Development",
  "freeCodeCamp – Data Analysis with Python",
  "Udemy – SAP ABAP Programming",
];

const ExperienceSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="experience" className="py-24 bg-card">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">Experience</h2>
            <div className="w-12 h-1 bg-primary rounded mb-10" />
            <div className="space-y-8">
              {experiences.map((exp, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <Briefcase size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-primary mb-1">{exp.period}</p>
                    <h3 className="font-semibold text-foreground">{exp.role}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{exp.company}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">Certifications</h2>
            <div className="w-12 h-1 bg-primary rounded mb-10" />
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border bg-background text-sm text-foreground hover:border-primary/40 transition-colors"
                >
                  <Award size={14} className="text-primary shrink-0" />
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
