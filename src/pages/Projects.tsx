import { useState } from "react";
import { ExternalLink, Github, Sparkles, Calendar, Award, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import blackjackImg from "@/assets/project-blackjack.jpg";
import ecommerceImg from "@/assets/project-ecommerce.jpg";
import careerImg from "@/assets/project-career.jpg";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Machine Learning", "Data Science", "Web Development"];

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
      pullQuote: "30% boost in decision accuracy through AI-powered strategy tips",
      date: "2024",
      category: "Machine Learning",
      impact: "Enhanced gameplay experience for multi-player environments",
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
      pullQuote: "Revolutionizing product discovery through intelligent recommendations",
      date: "2024",
      category: "Data Science",
      impact: "Improved user engagement and product discoverability",
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
      pullQuote: "Empowering career decisions with data-driven insights",
      date: "2023",
      category: "Data Science",
      impact: "Helping professionals navigate career advancement opportunities",
      featured: false,
    },
  ];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const featuredProject = projects[0];
  const otherProjects = filteredProjects.slice(1);

  return (
    <div className="min-h-screen pt-24 pb-20 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header Section */}
        <header className="mb-16 animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-primary rounded-full" />
            <div>
              <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium mb-1">
                Portfolio
              </p>
              <h1 className="text-6xl md:text-7xl font-bold text-foreground leading-tight">
                Featured<br />Projects
              </h1>
            </div>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed ml-7">
            A curated collection of data science and machine learning solutions 
            that solve real-world challenges through innovative approaches.
          </p>
        </header>

        {/* Category Filter Tabs */}
        <div className="mb-16 border-b border-border">
          <div className="flex gap-8 overflow-x-auto pb-px">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`pb-4 px-1 text-sm font-medium whitespace-nowrap transition-all duration-300 relative ${
                  activeCategory === category
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
                {activeCategory === category && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary animate-fade-in" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Hero Featured Project */}
        <article className="mb-24 animate-fade-in">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative group order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-3 rounded-xl shadow-xl">
                <p className="text-sm font-medium uppercase tracking-wide">Featured Project</p>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{featuredProject.date}</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-muted-foreground" />
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                  {featuredProject.category}
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                {featuredProject.title}
              </h2>

              {/* Pull Quote */}
              <blockquote className="border-l-4 border-primary pl-6 py-2 my-8">
                <p className="text-2xl font-medium text-foreground italic leading-relaxed">
                  "{featuredProject.pullQuote}"
                </p>
              </blockquote>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {featuredProject.description}
              </p>

              <div className="pt-4">
                <h3 className="text-sm font-bold uppercase tracking-wide text-foreground mb-4">
                  Key Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-muted text-foreground text-sm font-medium rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground mt-6"
                onClick={() => window.open("https://github.com/prafulpotluri", "_blank")}
              >
                <Github className="w-5 h-5 mr-2" />
                View Project
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </article>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-24" />

        {/* Other Projects - Asymmetric Layout */}
        <div className="space-y-24">
          {otherProjects.map((project, index) => (
            <ProjectArticle key={index} project={project} reverse={index % 2 === 1} />
          ))}
        </div>

        {/* Timeline Section */}
        <section className="mt-32 mb-24">
          <h2 className="text-4xl font-bold text-foreground mb-16 text-center">
            Project Timeline
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-12">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col`}
                >
                  <Card className={`flex-1 p-6 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <Award className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-primary">{project.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.impact}</p>
                  </Card>

                  {/* Timeline Node */}
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg relative z-10 flex-shrink-0">
                    <Code2 className="w-6 h-6 text-primary-foreground" />
                  </div>

                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <Card className="mt-20 p-12 text-center border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
          <Sparkles className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Explore More Projects
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Visit my GitHub profile to discover additional projects, contributions 
            to open-source communities, and ongoing experiments.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
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

// Project Article Component
const ProjectArticle = ({ project, reverse }: { project: any; reverse: boolean }) => {
  return (
    <article className="animate-fade-in">
      <div className={`grid lg:grid-cols-5 gap-12 ${reverse ? "lg:grid-flow-dense" : ""}`}>
        {/* Image Column - Takes 2 columns */}
        <div className={`lg:col-span-2 space-y-4 ${reverse ? "lg:col-start-4" : ""}`}>
          <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>{project.date}</span>
            <div className="w-1 h-1 rounded-full bg-muted-foreground" />
            <span className="px-3 py-1 bg-muted text-foreground rounded-full font-medium text-xs">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content Column - Takes 3 columns */}
        <div className={`lg:col-span-3 space-y-6 ${reverse ? "lg:col-start-1 lg:row-start-1" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
            {project.title}
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          {/* Pull Quote */}
          <blockquote className="border-l-4 border-primary pl-6 py-2 my-6">
            <p className="text-xl font-medium text-foreground italic">
              "{project.pullQuote}"
            </p>
          </blockquote>

          {/* Highlights */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-foreground mb-4">
              Key Achievements
            </h3>
            <ul className="space-y-3">
              {project.highlights.map((highlight: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-foreground mb-4">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string, idx: number) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-muted text-foreground text-sm rounded-md hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="lg"
            className="border-primary/30 hover:bg-primary hover:text-primary-foreground"
            onClick={() => window.open("https://github.com/prafulpotluri", "_blank")}
          >
            <Github className="w-5 h-5 mr-2" />
            View Project
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </article>
  );
};

export default Projects;
