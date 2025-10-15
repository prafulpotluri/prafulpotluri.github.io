import { useState, useRef, useEffect } from "react";
import {
  Code,
  Database,
  LineChart,
  Wrench,
  FileSpreadsheet,
  Sparkles,
  Award,
  Briefcase,
  Star,
  BarChart,
  Brain,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Programming skill levels with custom gradients
  const programmingSkills = [
    { name: "Python", level: 95, gradient: "from-blue-500 to-purple-500" },
    { name: "JavaScript", level: 70, gradient: "from-yellow-500 to-orange-500" },
    { name: "Java", level: 85, gradient: "from-red-500 to-orange-500" },
    { name: "SQL", level: 90, gradient: "from-cyan-500 to-blue-500" },
    { name: "R", level: 85, gradient: "from-indigo-500 to-purple-500" },
    { name: "C", level: 80, gradient: "from-gray-600 to-gray-800" },
  ];

  const skillCategories = [
    {
      id: "ml",
      title: "Machine Learning",
      icon: Database,
      skills: [
        "Data Preprocessing",
        "EDA",
        "Regression Analysis",
        "Text Mining",
        "NLP",
      ],
      gradient: "from-emerald-500/20 via-cyan-500/20 to-teal-500/20",
      glowGradient: "from-emerald-500/30 to-cyan-500/30",
    },
    {
      id: "libs",
      title: "Python Libraries",
      icon: Wrench,
      skills: [
        "NumPy",
        "Pandas",
        "Scikit-learn",
        "Matplotlib",
        "Seaborn",
        "TensorFlow",
      ],
      gradient: "from-orange-500/20 via-pink-500/20 to-rose-500/20",
      glowGradient: "from-orange-500/30 to-pink-500/30",
    },
    {
      id: "stats",
      title: "Statistical Analysis",
      icon: LineChart,
      skills: ["SAS Programming"],
      gradient: "from-violet-500/20 via-purple-500/20 to-indigo-500/20",
      glowGradient: "from-violet-500/30 to-purple-500/30",
    },
    {
      id: "tools",
      title: "Other Tools",
      icon: FileSpreadsheet,
      skills: ["MS Excel", "PowerPoint", "Word", "Tableau", "R Shiny"],
      gradient: "from-amber-500/20 via-yellow-500/20 to-orange-500/20",
      glowGradient: "from-amber-500/30 to-yellow-500/30",
    },
  ];

  const stats = [
    {
      id: "experience",
      value: "5+",
      label: "Years Experience",
      icon: Award,
      gradient: "from-yellow-500/20 to-orange-500/20",
      iconGradient: "from-yellow-500 to-orange-500",
    },
    {
      id: "projects",
      value: "10+",
      label: "Projects Done",
      icon: Briefcase,
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconGradient: "from-blue-500 to-cyan-500",
    },
    {
      id: "tech",
      value: "20+",
      label: "Technologies",
      icon: Star,
      gradient: "from-purple-500/20 to-pink-500/20",
      iconGradient: "from-purple-500 to-pink-500",
    },
  ];

  const competencies = [
    {
      title: "Data Engineering",
      description: "Building robust data pipelines and managing enterprise-scale data systems",
      icon: Database,
    },
    {
      title: "Analytics & Insights",
      description: "Transforming complex data into actionable business intelligence",
      icon: BarChart,
    },
    {
      title: "Machine Learning",
      description: "Developing intelligent systems using advanced ML algorithms",
      icon: Brain,
    },
  ];

  // 3D tilt effect handler
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, cardId: string) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  };

  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface-alt to-background -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header Section */}
        <div className="mb-16 text-center animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 mb-6 animate-pulse">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Skills
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-full mx-auto mb-4 animate-scale-in" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technical expertise across the full data science stack
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-6 mb-16">
          {/* Featured Programming Card - Large 2x2 */}
          <Card
            className="relative md:col-span-4 lg:col-span-3 lg:row-span-2 bg-card/80 backdrop-blur-xl border-border/50 p-8 group overflow-hidden transition-all duration-300"
            style={{ animationDelay: "0.1s" }}
            onMouseMove={(e) => handleMouseMove(e, "featured")}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => setHoveredCard("featured")}
          >
            {/* Glow Effect */}
            <div
              className={`absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-70 blur-2xl transition-opacity duration-500 -z-10`}
            />

            {/* Featured Badge */}
            <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold rounded-full">
              Featured
            </div>

            {/* Icon */}
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
              <Code className="w-7 h-7 text-primary" />
            </div>

            <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Programming
            </h2>
            <p className="text-muted-foreground mb-8">Core language proficiency</p>

            {/* Progress Bars */}
            <div className="space-y-5">
              {programmingSkills.map((skill, idx) => (
                <div
                  key={skill.name}
                  className="animate-fade-in"
                  style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground font-semibold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-secondary/50">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.gradient} transition-all duration-1000 ease-out rounded-full`}
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${0.3 + idx * 0.1}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Machine Learning Card */}
          <Card
            className="relative md:col-span-4 lg:col-span-2 bg-card/80 backdrop-blur-xl border-border/50 p-6 group overflow-hidden transition-all duration-300 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
            onMouseMove={(e) => handleMouseMove(e, "ml")}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => setHoveredCard("ml")}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${skillCategories[0].glowGradient} opacity-0 group-hover:opacity-70 blur-2xl transition-opacity duration-500 -z-10`}
            />
            <div
              className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skillCategories[0].gradient} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}
            >
              <Database className="w-6 h-6 text-emerald-500" />
            </div>
            <h2 className="text-xl font-semibold mb-4 bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
              {skillCategories[0].title}
            </h2>
            <div className="flex flex-wrap gap-2">
              {skillCategories[0].skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-emerald-500/10 text-emerald-500 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:scale-105 border border-emerald-500/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>

          {/* Stats Card 1 - Years */}
          <Card
            className="relative md:col-span-2 lg:col-span-2 bg-card/80 backdrop-blur-xl border-border/50 p-6 group overflow-hidden transition-all duration-300 hover:scale-105 animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${stats[0].gradient} opacity-50 group-hover:opacity-70 blur-xl transition-opacity duration-500 -z-10`}
            />
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stats[0].iconGradient} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
              <Award className="w-6 h-6 text-white" />
            </div>
            <div className="text-4xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-2">
              {stats[0].value}
            </div>
            <div className="text-sm text-muted-foreground font-medium">{stats[0].label}</div>
          </Card>

          {/* Python Libraries Card */}
          <Card
            className="relative md:col-span-4 lg:col-span-2 bg-card/80 backdrop-blur-xl border-border/50 p-6 group overflow-hidden transition-all duration-300 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
            onMouseMove={(e) => handleMouseMove(e, "libs")}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => setHoveredCard("libs")}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${skillCategories[1].glowGradient} opacity-0 group-hover:opacity-70 blur-2xl transition-opacity duration-500 -z-10`}
            />
            <div
              className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skillCategories[1].gradient} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}
            >
              <Wrench className="w-6 h-6 text-orange-500" />
            </div>
            <h2 className="text-xl font-semibold mb-4 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              {skillCategories[1].title}
            </h2>
            <div className="flex flex-wrap gap-2">
              {skillCategories[1].skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-orange-500/10 text-orange-500 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-orange-500 hover:text-white hover:scale-105 border border-orange-500/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>

          {/* Stats Card 2 - Projects */}
          <Card
            className="relative md:col-span-2 lg:col-span-2 bg-card/80 backdrop-blur-xl border-border/50 p-6 group overflow-hidden transition-all duration-300 hover:scale-105 animate-slide-up"
            style={{ animationDelay: "0.5s" }}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${stats[1].gradient} opacity-50 group-hover:opacity-70 blur-xl transition-opacity duration-500 -z-10`}
            />
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stats[1].iconGradient} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-2">
              {stats[1].value}
            </div>
            <div className="text-sm text-muted-foreground font-medium">{stats[1].label}</div>
          </Card>

          {/* Statistical Analysis Card */}
          <Card
            className="relative md:col-span-2 lg:col-span-2 bg-card/80 backdrop-blur-xl border-border/50 p-6 group overflow-hidden transition-all duration-300 animate-slide-up"
            style={{ animationDelay: "0.6s" }}
            onMouseMove={(e) => handleMouseMove(e, "stats")}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => setHoveredCard("stats")}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${skillCategories[2].glowGradient} opacity-0 group-hover:opacity-70 blur-2xl transition-opacity duration-500 -z-10`}
            />
            <div
              className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skillCategories[2].gradient} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}
            >
              <LineChart className="w-6 h-6 text-violet-500" />
            </div>
            <h2 className="text-xl font-semibold mb-4 bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
              {skillCategories[2].title}
            </h2>
            <div className="flex flex-wrap gap-2">
              {skillCategories[2].skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-violet-500/10 text-violet-500 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-violet-500 hover:text-white hover:scale-105 border border-violet-500/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>

          {/* Other Tools Card */}
          <Card
            className="relative md:col-span-4 lg:col-span-3 bg-card/80 backdrop-blur-xl border-border/50 p-6 group overflow-hidden transition-all duration-300 animate-slide-up"
            style={{ animationDelay: "0.7s" }}
            onMouseMove={(e) => handleMouseMove(e, "tools")}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => setHoveredCard("tools")}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${skillCategories[3].glowGradient} opacity-0 group-hover:opacity-70 blur-2xl transition-opacity duration-500 -z-10`}
            />
            <div
              className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skillCategories[3].gradient} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}
            >
              <FileSpreadsheet className="w-6 h-6 text-amber-500" />
            </div>
            <h2 className="text-xl font-semibold mb-4 bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
              {skillCategories[3].title}
            </h2>
            <div className="flex flex-wrap gap-2">
              {skillCategories[3].skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-amber-500/10 text-amber-500 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-amber-500 hover:text-white hover:scale-105 border border-amber-500/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>

          {/* Stats Card 3 - Technologies */}
          <Card
            className="relative md:col-span-2 lg:col-span-2 bg-card/80 backdrop-blur-xl border-border/50 p-6 group overflow-hidden transition-all duration-300 hover:scale-105 animate-slide-up"
            style={{ animationDelay: "0.8s" }}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${stats[2].gradient} opacity-50 group-hover:opacity-70 blur-xl transition-opacity duration-500 -z-10`}
            />
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stats[2].iconGradient} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
              <Star className="w-6 h-6 text-white" />
            </div>
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
              {stats[2].value}
            </div>
            <div className="text-sm text-muted-foreground font-medium">{stats[2].label}</div>
          </Card>
        </div>

        {/* Core Competencies Section */}
        <Card className="relative bg-gradient-to-br from-primary/10 via-purple-500/5 to-pink-500/5 backdrop-blur-xl border border-primary/30 p-8 overflow-hidden animate-fade-in">
          {/* Animated gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-pink-500 opacity-20 blur-xl animate-pulse -z-10" />
          
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Core Competencies
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {competencies.map((competency, idx) => {
              const Icon = competency.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/30 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl -z-10" />
                  
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h3 className="font-semibold text-lg text-primary mb-2 group-hover:text-purple-500 transition-colors">
                    {competency.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {competency.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Skills;
