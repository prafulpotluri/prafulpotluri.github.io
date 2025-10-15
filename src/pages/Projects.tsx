import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import blackjackImg from "@/assets/project-blackjack.jpg";
import ecommerceImg from "@/assets/project-ecommerce.jpg";
import careerImg from "@/assets/project-career.jpg";

const Projects = () => {
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
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl shadow-lg border border-primary/10 overflow-hidden hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-64 md:h-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>

                <div className="p-8 flex flex-col justify-center">
                  <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h3 className="text-sm font-semibold mb-2 text-primary">Key Highlights:</h3>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary/30 hover:border-primary hover:bg-primary/5"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
