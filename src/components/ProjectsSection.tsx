import { ExternalLink } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
  {
    title: "AI-NIDS Project",
    description: "AI-Based Network Intrusion Detection System using Python and Random Forest ML algorithm with a real-time monitoring dashboard for detecting network threats.",
    tags: ["Python", "ML", "Random Forest", "Cybersecurity"],
    github: "https://github.com/madithatiinduja/AI-NIDS-Project",
  },
  {
    title: "Placement Portal",
    description: "Web-based portal streamlining campus recruitment with role-based access for Admin, Company & Student. Features drive management, application tracking, async CSV exports, and automated email reminders via Celery.",
    tags: ["Flask", "Vue.js", "SQLite", "Redis", "Celery", "JWT"],
    github: "https://github.com/madithatiinduja/placement_portal",
  },
  {
    title: "PhishGuard",
    description: "A phishing detection and prevention tool that identifies malicious URLs and emails, protecting users from cyber threats with real-time analysis.",
    tags: ["Python", "ML", "Cybersecurity"],
    github: "https://github.com/madithatiinduja/Phisguard",
  },
  {
    title: "CineHive",
    description: "A full-stack movie recommendation platform with collaborative filtering, achieving a 30% improvement in recommendation efficiency.",
    tags: ["React", "Node.js", "MongoDB", "ML"],
    github: "https://github.com/madithatiinduja/Movie-recommendation-system",
  },
  {
    title: "Walmart Sales Analytics",
    description: "Comprehensive data analytics project using complex SQL queries and Python to derive actionable business insights from large-scale retail data.",
    tags: ["Python", "SQL", "Data Analytics", "Visualization"],
    github: "https://github.com/madithatiinduja/walmart_sales",
  },
  {
    title: "College Chatbot",
    description: "Classification-based chatbot to automate responses to frequently asked college-related queries, reducing manual support workload by over 40%.",
    tags: ["Python", "NLP"],
    github: "https://github.com/madithatiinduja/College-Chatbot",
  },
  {
    title: "Quiz Master",
    description: "Automated management platform for subjects, chapters, and quizzes with a scoring engine that generates instant student results and comprehensive admin reports.",
    tags: ["Python", "Flask", "SQLite"],
    github: "https://github.com/madithatiinduja/Quiz-Master",
  },
];

const ProjectsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <h2 className="text-3xl font-bold text-foreground mb-2">Projects</h2>
        <div className="w-12 h-1 bg-primary rounded mb-12" />

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group p-6 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <ExternalLink size={18} />
                </a>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">
                    {tag}
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

export default ProjectsSection;
