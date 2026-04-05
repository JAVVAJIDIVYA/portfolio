import { Briefcase, Award } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const experiences = [
  {
    role: "Intern",
    company: "Infosys Springboard",
    period: "Oct 2025 – Dec 2025",
    description: "Developed Django-based applications with authentication systems and dashboards. Presented the Pet Rescue and Management System as a final project demo to the Infosys evaluation panel.",
  },
  {
    role: "Intern",
    company: "Edunet Foundation (AICTE)",
    period: "Apr 2025 – May 2025",
    description: "Built a Flask-based sentiment analysis web application with 80% accuracy. Implemented backend logic and handled real-time data processing.",
  },
];

const certifications = [
  "Python Programming Certification – GFG",
  "Python Bootcamp – Udemy",
  "NPTEL Python Elite Silver Certificate",
  "AWS Forage Virtual Internship",
  "Cisco Cybersecurity Certification",
  "LeetCode 50 Days Streak Badge",
  "Hackathon Participant",
];

const ExperienceSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="experience" className="py-24 bg-[#f4f4f4]">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-black tracking-tight">Experience</h2>
          <div className="w-20 h-1 bg-black mx-auto mt-4" />
        </div>

        <div className="max-w-4xl mx-auto space-y-16">
          {experiences.map((exp, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
              <div className="md:w-48 pt-2">
                <span className="text-xl font-bold text-black/40 tracking-widest uppercase">{exp.period}</span>
              </div>
              <div className="flex-1 space-y-4">
                <h3 className="text-3xl font-bold text-black tracking-tight">{exp.role}</h3>
                <p className="text-xl font-bold text-black/60">{exp.company}</p>
                <p className="text-lg text-black/80 leading-relaxed font-medium">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black tracking-tight">Certifications</h2>
            <div className="w-16 h-1 bg-black mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="flex items-center gap-4 p-6 bg-white rounded-xl border border-black/5 hover:border-black/20 transition-all group shadow-sm"
              >
                <Award size={24} className="text-black group-hover:scale-110 transition-transform" />
                <span className="text-lg font-bold text-black tracking-tight">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
