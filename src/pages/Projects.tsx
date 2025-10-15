import { useState, useEffect } from "react";
import { ExternalLink, Github, Sparkles, ChevronLeft, ChevronRight, RotateCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import blackjackImg from "@/assets/project-blackjack.jpg";
import ecommerceImg from "@/assets/project-ecommerce.jpg";
import careerImg from "@/assets/project-career.jpg";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

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
      gradient: "from-blue-500 via-purple-500 to-pink-500",
      color: "bg-blue-500",
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
      gradient: "from-emerald-500 via-cyan-500 to-teal-500",
      color: "bg-emerald-500",
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
      gradient: "from-orange-500 via-pink-500 to-rose-500",
      color: "bg-orange-500",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setFlippedCards(new Set());
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setFlippedCards(new Set());
  };

  const toggleFlip = (index: number) => {
    const newFlipped = new Set(flippedCards);
    if (newFlipped.has(index)) {
      newFlipped.delete(index);
    } else {
      newFlipped.add(index);
    }
    setFlippedCards(newFlipped);
  };

  // Touch handlers for swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      handleNext();
    }
    if (touchStart - touchEnd < -75) {
      handlePrev();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden bg-gradient-to-br from-background via-surface to-surface-alt">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent -z-10" />
      
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="mb-12 animate-fade-in text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-primary animate-pulse" />
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Featured Projects
            </h1>
          </div>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-4">
            Interactive card deck - Click to flip and explore details
          </p>
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            <RotateCw className="w-4 h-4" />
            Use arrow keys or swipe to navigate
          </p>
        </div>

        {/* Card Deck Container */}
        <div 
          className="relative h-[600px] md:h-[700px] flex items-center justify-center perspective-1000"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {projects.map((project, index) => {
            const offset = index - currentIndex;
            const isFlipped = flippedCards.has(index);
            const isCurrent = index === currentIndex;
            
            return (
              <div
                key={index}
                className="absolute w-full max-w-2xl transition-all duration-700 ease-out cursor-pointer"
                style={{
                  transform: `
                    translateX(${offset * 30}px) 
                    translateY(${Math.abs(offset) * 20}px)
                    translateZ(${-Math.abs(offset) * 100}px)
                    rotateY(${isFlipped ? 180 : 0}deg)
                    rotateZ(${offset * 3}deg)
                    scale(${isCurrent ? 1 : 0.9 - Math.abs(offset) * 0.1})
                  `,
                  zIndex: 10 - Math.abs(offset),
                  opacity: Math.abs(offset) > 2 ? 0 : 1 - Math.abs(offset) * 0.2,
                  pointerEvents: isCurrent ? 'auto' : 'none',
                  transformStyle: 'preserve-3d',
                }}
                onClick={() => isCurrent && toggleFlip(index)}
              >
                <CardDeck project={project} isFlipped={isFlipped} />
              </div>
            );
          })}
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <Button
            variant="outline"
            size="lg"
            onClick={handlePrev}
            className="rounded-full w-14 h-14 p-0 border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          {/* Progress Indicator */}
          <div className="flex gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setFlippedCards(new Set());
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-12 bg-primary' 
                    : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="lg"
            onClick={handleNext}
            className="rounded-full w-14 h-14 p-0 border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Instruction Text */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          {currentIndex + 1} of {projects.length} projects
        </p>

        {/* Call to Action */}
        <div className="mt-16 text-center p-8 md:p-12 bg-card/50 backdrop-blur-xl rounded-3xl border border-border/50 shadow-2xl">
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
        </div>
      </div>
    </div>
  );
};

// Card Deck Component with Front and Back
const CardDeck = ({ project, isFlipped }: { project: any; isFlipped: boolean }) => {
  return (
    <div className="relative w-full h-[550px] md:h-[650px]" style={{ transformStyle: 'preserve-3d' }}>
      {/* Front Side - Image with Title Overlay */}
      <div
        className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden shadow-2xl"
        style={{
          backfaceVisibility: 'hidden',
          transform: 'rotateY(0deg)',
        }}
      >
        <div className="relative w-full h-full group">
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
          
          {/* Image */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          
          {/* Dark Gradient for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
              {project.title}
            </h2>
            <p className="text-white/90 text-lg mb-6 drop-shadow-md">
              {project.description}
            </p>
            <div className="flex items-center gap-3 text-white/80 text-sm">
              <RotateCw className="w-5 h-5 animate-spin-slow" />
              <span>Click to flip for details</span>
            </div>
          </div>

          {/* Flip Icon Hint */}
          <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-md rounded-full p-3 border border-white/20">
            <RotateCw className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Back Side - Full Details */}
      <div
        className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden shadow-2xl bg-card border border-border"
        style={{
          backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
        }}
      >
        <div className="h-full overflow-y-auto p-8 md:p-12 space-y-6">
          {/* Header */}
          <div>
            <div className={`inline-block px-4 py-2 ${project.color} text-white rounded-full text-sm font-semibold mb-4`}>
              Featured Project
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {project.title}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Achievements */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-primary rounded-full" />
              Key Achievements
            </h3>
            <ul className="space-y-3">
              {project.highlights.map((highlight: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-primary rounded-full" />
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string, idx: number) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-primary/10 text-primary font-medium rounded-lg border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 space-y-3">
            <Button
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
              size="lg"
              onClick={(e) => {
                e.stopPropagation();
                window.open("https://github.com/prafulpotluri", "_blank");
              }}
            >
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
            <p className="text-center text-sm text-muted-foreground">
              Click anywhere to flip back
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
