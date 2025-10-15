import { useState } from "react";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import blackjackImg from "@/assets/project-blackjack.jpg";
import ecommerceImg from "@/assets/project-ecommerce.jpg";
import careerImg from "@/assets/project-career.jpg";

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Blackjack Game with AI Assist",
      description: "An engaging, multi-player Blackjack game featuring an AI assistant that offers real-time strategy tips to players, boosting decision accuracy by 30%.",
      image: blackjackImg,
      technologies: ["Python", "TensorFlow", "DQN", "MDP", "Tkinter"],
      highlights: [
        "Built AI using reinforcement learning techniques with TensorFlow",
        "Combined rule-based logic (MDP) and learning-based models (DQN) for 25% more optimal suggestions",
        "Designed user-friendly interface with dynamic card displays and real-time score updates",
      ],
      gradient: "from-blue-500/20 to-purple-500/20",
      accentColor: "text-blue-500",
    },
    {
      title: "E-commerce Recommendation System",
      description: "Personalized product recommendation system using collaborative filtering and machine learning techniques on Alexa Reviews dataset.",
      image: ecommerceImg,
      technologies: ["Python", "Collaborative Filtering", "Machine Learning", "Data Analytics"],
      highlights: [
        "Implemented advanced collaborative filtering algorithms",
        "Processed and analyzed large-scale e-commerce data",
        "Delivered personalized recommendations to enhance user experience",
      ],
      gradient: "from-emerald-500/20 to-cyan-500/20",
      accentColor: "text-emerald-500",
    },
    {
      title: "Career Advancement Prediction App",
      description: "R Shiny application using Random Forest and Agile methods to provide personalized career insights and advancement predictions.",
      image: careerImg,
      technologies: ["R", "Shiny", "Random Forest", "Agile", "Data Visualization"],
      highlights: [
        "Developed interactive dashboard for career path analysis",
        "Applied Random Forest algorithms for prediction accuracy",
        "Created intuitive visualizations for complex career data",
      ],
      gradient: "from-orange-500/20 to-pink-500/20",
      accentColor: "text-orange-500",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-background to-surface-alt">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16 animate-fade-in text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Featured Projects</h1>
          </div>
          <div className="h-1 w-24 bg-primary rounded-sm mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of data science and machine learning projects, each solving real-world challenges with innovative solutions.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>
              
              <div className="relative bg-card rounded-2xl shadow-lg border border-border overflow-hidden group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                <div className={`grid ${index % 2 === 0 ? 'md:grid-cols-[1.2fr,1fr]' : 'md:grid-cols-[1fr,1.2fr]'} gap-0`}>
                  {/* Image Section */}
                  <div className={`relative h-80 md:h-full overflow-hidden ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Floating badge */}
                    <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg z-20 transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <span className={`font-semibold ${project.accentColor}`}>Featured Project</span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`p-8 md:p-12 flex flex-col justify-center ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                    <h2 className="text-3xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                      {project.description}
                    </p>

                    {/* Highlights with stagger animation */}
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold mb-3 text-primary uppercase tracking-wide">Key Achievements</h3>
                      <ul className="space-y-3">
                        {project.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 transform transition-all duration-300"
                            style={{
                              transitionDelay: activeProject === index ? `${idx * 100}ms` : '0ms',
                              opacity: activeProject === index ? 1 : 0.7,
                              transform: activeProject === index ? 'translateX(0)' : 'translateX(-10px)'
                            }}
                          >
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                            <span className="text-muted-foreground">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20 hover:bg-primary hover:text-white transition-all duration-300 cursor-default transform hover:scale-105"
                          style={{
                            transitionDelay: activeProject === index ? `${idx * 50}ms` : '0ms'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action button */}
                    <div className="flex gap-4">
                      <Button
                        variant="default"
                        size="lg"
                        className="group/btn bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                        onClick={() => window.open("https://github.com/prafulpotluri", "_blank")}
                      >
                        <Github className="w-5 h-5 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                        View on GitHub
                        <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-20 text-center animate-fade-in bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-12 border border-primary/30">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Want to see more?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Check out my GitHub profile for more projects and contributions to open-source communities.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => window.open("https://github.com/prafulpotluri", "_blank")}
          >
            <Github className="w-5 h-5 mr-2" />
            Visit My GitHub Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
