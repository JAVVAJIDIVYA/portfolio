import { GraduationCap } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    school: "Vignan's Lara Institute of Technology & Science",
    year: "2023 – 2027",
    highlight: "CGPA: 9.24 / 10",
  },
  {
    degree: "BS Degree in Data Science & Applications",
    school: "Indian Institute of Technology, Madras",
    year: "2023 – Present",
    highlight: "IIT Madras Online Degree",
  },
];

const AboutSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <h2 className="text-3xl font-bold text-foreground mb-2">About & Education</h2>
        <div className="w-12 h-1 bg-primary rounded mb-12" />

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              I'm a Computer Science graduate with a strong foundation in software development, data analytics, and SAP technologies. My dual-degree journey reflects my commitment to continuous learning and technical excellence.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With hands-on experience in cybersecurity, generative AI, and enterprise systems, I bring a unique blend of academic rigor and practical expertise to every project.
            </p>
          </div>

          <div className="space-y-6">
            {education.map((edu, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <GraduationCap size={18} className="text-primary" />
                  </div>
                  {i < education.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                </div>
                <div className="pb-6">
                  <p className="text-xs font-medium text-primary mb-1">{edu.year}</p>
                  <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                  <p className="text-sm text-muted-foreground">{edu.school}</p>
                  <span className="inline-block mt-2 text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {edu.highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
