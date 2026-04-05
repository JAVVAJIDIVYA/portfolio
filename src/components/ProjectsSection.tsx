import { ExternalLink } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
  {
    title: "TalkTrade (Fiverr Clone)",
    description: "Built and deployed a freelance marketplace platform with responsive UI and user workflows. Designed to help students find freelance opportunities.",
    tags: ["Django", "JavaScript", "Vercel", "HTML/CSS"],
    github: "https://github.com/JAVVAJIDIVYA/Talktrade",
    image: "project1.jpg.png",
  },
  {
    title: "Smart Queue Management System",
    description: "Developed Django-based virtual queue system reducing wait time by 30% with live countdown and delay tracking.",
    tags: ["Python", "Django", "SQLite", "HTML/CSS"],
    github: "https://github.com/JAVVAJIDIVYA/Queue-Management-System",
    image: "project2.jpg.png",
  },
  {
    title: "Sentiment Analysis Web App",
    description: "Developed Flask-based ML application for real-time text classification using REST APIs for prediction handling.",
    tags: ["Python", "Flask", "ML", "REST API"],
    github: "https://github.com/JAVVAJIDIVYA/sentiment-analysis-webapp",
    image: "project3.jpg.png",
  },
  {
    title: "Pet Rescue & Management System",
    description: "Developed Django-based multi-app system with authentication, dashboards, and error handling mechanisms.",
    tags: ["Python", "Django", "SQLite", "Auth"],
    github: "https://github.com/Springboard-Internship-2025/Pet-Adoption-and-Rescue-Management-Portal_October_Batch-4_2025/tree/JAVVAJI-DIVYA",
    image: "project4.jpg.png",
  },
];

const ProjectsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="py-16 bg-[#f4f4f4]">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black tracking-tight">Projects</h2>
          <div className="w-16 h-1 bg-black mx-auto mt-3" />
        </div>

        <div className="space-y-24">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className={`flex flex-col ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-10 md:gap-20`}
            >
              {/* Project Text */}
              <div className="flex-1 space-y-4 text-center md:text-left">
                <h3 className="text-3xl font-bold text-black tracking-tight">
                  {project.title}
                </h3>
                <p className="text-base text-black/70 leading-relaxed font-medium">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs px-3 py-1.5 bg-white text-black font-bold border border-black/5 rounded-md shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="pt-2">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-black font-bold text-base border-b-2 border-black hover:pb-1 transition-all"
                  >
                    View on GitHub <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              {/* Project Image Container */}
              <div className="md:w-1/3 w-full aspect-[4/3] bg-white rounded-2xl overflow-hidden shadow-xl border border-black/5 group">
                <img 
                  src={`${import.meta.env.BASE_URL}${project.image}`} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    // Fallback if image doesn't exist yet
                    (e.target as HTMLImageElement).style.display = 'none';
                    const parent = (e.target as HTMLElement).parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center text-black/10 font-black text-2xl">
                          ${project.title.split(' ')[0]}
                        </div>
                      `;
                    }
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
