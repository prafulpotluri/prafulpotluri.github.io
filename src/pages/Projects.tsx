import { useState } from "react";
import { ExternalLink, Github, Sparkles, Code2, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
      stats: {
        accuracy: "30%",
        optimization: "25%",
        impact: "Multi-player"
      },
      gradient: "from-blue-500/20 via-purple-500/20 to-pink-500/20",
      featured: true,
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
      stats: {
        scale: "Large-scale",
        technique: "ML + CF",
        focus: "Personalization"
      },
      gradient: "from-emerald-500/20 via-cyan-500/20 to-teal-500/20",
      featured: false,
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
      stats: {
        method: "Agile",
        accuracy: "High",
        type: "Interactive"
      },
      gradient: "from-orange-500/20 via-pink-500/20 to-rose-500/20",
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-surface-alt -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent -z-10" />
      
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="mb-16 animate-fade-in text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-primary animate-pulse" />
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Featured Projects
            </h1>
          </div>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Innovative solutions powered by data science and machine learning
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Featured Large Project - Takes 2 columns */}
          <div className="lg:col-span-2 lg:row-span-2">
            <ProjectCard project={projects[0]} featured />
          </div>

          {/* Stats Cards - Vertical stack */}
          <div className="space-y-6">
            <StatsCard
              icon={<Code2 className="w-6 h-6" />}
              title="Projects Completed"
              value="10+"
              description="Machine learning & AI solutions"
              gradient="from-blue-500/10 to-purple-500/10"
            />
            <StatsCard
              icon={<Zap className="w-6 h-6" />}
              title="Technologies"
              value="15+"
              description="Frameworks & tools mastered"
              gradient="from-emerald-500/10 to-cyan-500/10"
            />
            <StatsCard
              icon={<TrendingUp className="w-6 h-6" />}
              title="Impact"
              value="30%+"
              description="Average accuracy improvement"
              gradient="from-orange-500/10 to-pink-500/10"
            />
          </div>

          {/* Second Project */}
          <div className="lg:col-span-2">
            <ProjectCard project={projects[1]} />
          </div>

          {/* Third Project */}
          <div className="lg:col-span-1">
            <ProjectCard project={projects[2]} compact />
          </div>
        </div>

        {/* Call to Action */}
        <Card className="mt-12 p-8 md:p-12 text-center relative overflow-hidden border-primary/20 bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 -z-10" />
          <Sparkles className="w-12 h-12 text-primary mx-auto mb-4 animate-pulse" />
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Want to see more?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-lg">
            Explore my GitHub for additional projects and open-source contributions
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            onClick={() => window.open("https://github.com/prafulpotluri", "_blank")}
          >
            <Github className="w-5 h-5 mr-2" />
            Visit GitHub Profile
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </Card>
      </div>
    </div>
  );
};

// Project Card Component with 3D hover effects
const ProjectCard = ({ 
  project, 
  featured = false,
  compact = false 
}: { 
  project: any; 
  featured?: boolean;
  compact?: boolean;
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePosition({ x, y });
  };

  return (
    <div
      className="group relative h-full animate-fade-in"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      style={{
        transform: isHovered 
          ? `perspective(1000px) rotateY(${mousePosition.x * 0.5}deg) rotateX(${-mousePosition.y * 0.5}deg) scale(1.02)`
          : 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)',
        transition: 'transform 0.3s ease-out',
      }}
    >
      {/* Glow Effect */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl opacity-0 group-hover:opacity-70 blur-2xl transition-opacity duration-500 -z-10`} />
      
      {/* Glass Card */}
      <Card className={`relative h-full overflow-hidden border-border/50 bg-card/80 backdrop-blur-xl shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 ${featured ? 'min-h-[600px]' : compact ? 'min-h-[400px]' : 'min-h-[450px]'}`}>
        {/* Image Section */}
        <div className={`relative overflow-hidden ${featured ? 'h-80' : compact ? 'h-48' : 'h-64'}`}>
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent z-10" />
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {featured && (
            <div className="absolute top-4 right-4 px-4 py-2 bg-primary/90 backdrop-blur-sm text-primary-foreground rounded-full text-sm font-semibold shadow-lg z-20 animate-fade-in">
              ⭐ Featured
            </div>
          )}
        </div>

        {/* Content */}
        <div className={`p-6 ${featured ? 'space-y-4' : compact ? 'space-y-3' : 'space-y-4'}`}>
          <h3 className={`font-bold text-foreground group-hover:text-primary transition-colors duration-300 ${featured ? 'text-3xl' : compact ? 'text-xl' : 'text-2xl'}`}>
            {project.title}
          </h3>
          
          {!compact && (
            <p className={`text-muted-foreground leading-relaxed ${featured ? 'text-base' : 'text-sm'}`}>
              {project.description}
            </p>
          )}

          {/* Stats Pills */}
          <div className="flex flex-wrap gap-2">
            {Object.entries(project.stats).map(([key, value]) => (
              <span
                key={key}
                className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20 backdrop-blur-sm"
              >
                {value as string}
              </span>
            ))}
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, compact ? 3 : undefined).map((tech: string, idx: number) => (
              <span
                key={idx}
                className="px-3 py-1 bg-muted/50 text-muted-foreground text-xs rounded-md hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Button */}
          <Button
            variant="outline"
            size={compact ? "sm" : "default"}
            className="w-full group/btn border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            onClick={() => window.open("https://github.com/prafulpotluri", "_blank")}
          >
            <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
            View Project
            <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </div>
      </Card>
    </div>
  );
};

// Stats Card Component
const StatsCard = ({ 
  icon, 
  title, 
  value, 
  description,
  gradient 
}: { 
  icon: React.ReactNode; 
  title: string; 
  value: string; 
  description: string;
  gradient: string;
}) => {
  return (
    <Card className={`p-6 border-border/50 bg-gradient-to-br ${gradient} backdrop-blur-xl hover:scale-105 transition-all duration-300 cursor-default group`}>
      <div className="flex items-start gap-4">
        <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <div className="flex-1">
          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{title}</p>
          <p className="text-3xl font-bold text-foreground mb-1">{value}</p>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
      </div>
    </Card>
  );
};

export default Projects;
