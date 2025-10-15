import { useState, useEffect } from "react";
import { 
  Code, 
  Wrench, 
  BarChart, 
  LineChart, 
  FileSpreadsheet,
  Calendar,
  Star,
  Briefcase 
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const [progressValues, setProgressValues] = useState({
    Python: 0,
    JavaScript: 0,
    Java: 0,
    SQL: 0,
    R: 0,
    C: 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgressValues({
        Python: 95,
        JavaScript: 70,
        Java: 85,
        SQL: 90,
        R: 85,
        C: 80,
      });
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const programmingLanguages = [
    { name: "Python", level: progressValues.Python },
    { name: "JavaScript", level: progressValues.JavaScript },
    { name: "Java", level: progressValues.Java },
    { name: "SQL", level: progressValues.SQL },
    { name: "R", level: progressValues.R },
    { name: "C", level: progressValues.C },
  ];

  const skillCategories = [
    {
      title: "Python Libraries & Frameworks",
      icon: Wrench,
      skills: ["NumPy", "Pandas", "Scikit-learn", "TensorFlow", "Matplotlib", "Seaborn"]
    },
    {
      title: "Data Science & Analytics",
      icon: BarChart,
      skills: ["Data Preprocessing", "EDA", "Regression Analysis", "Text Mining", "NLP"]
    },
    {
      title: "Statistical Tools",
      icon: LineChart,
      skills: ["SAS Programming", "R (Statistical Computing)"]
    },
    {
      title: "Productivity & Visualization",
      icon: FileSpreadsheet,
      skills: ["MS Excel", "Tableau", "R Shiny"]
    }
  ];

  const stats = [
    { icon: Calendar, number: "4+", label: "Years Experience" },
    { icon: Star, number: "20+", label: "Technologies" },
    { icon: Briefcase, number: "10+", label: "Projects" }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background relative overflow-hidden">
      {/* Subtle geometric accents */}
      <div className="absolute top-32 right-12 w-6 h-6 rounded-full border-2 border-primary/20" />
      <div className="absolute bottom-32 left-12 w-5 h-5 border-2 border-primary/30 rotate-12" />
      
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="mb-16 animate-fade-in">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Skills
            </h1>
            <div className="h-px w-20 bg-primary" />
          </div>
          <p className="text-lg text-muted-foreground">
            Technical Expertise & Proficiencies
          </p>
        </div>

        {/* Featured Programming Languages Card */}
        <Card className="mb-12 border-border/50 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Code className="w-5 h-5 text-primary" />
              </div>
              Programming Languages
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programmingLanguages.map((lang, idx) => (
                <div key={lang.name} className="space-y-2" style={{ animationDelay: `${idx * 100}ms` }}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">{lang.name}</span>
                    <span className="text-sm text-muted-foreground">{lang.level}%</span>
                  </div>
                  <Progress value={lang.level} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, idx) => (
            <Card 
              key={category.title}
              className="border-border/50 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${(idx + 6) * 100}ms` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-lg">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-sm font-medium transition-all hover:bg-primary hover:text-primary-foreground cursor-default"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-in" style={{ animationDelay: "1000ms" }}>
          {stats.map((stat, idx) => (
            <Card 
              key={stat.label}
              className="border-border/50 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-center"
            >
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center space-y-4 animate-fade-in" style={{ animationDelay: "1200ms" }}>
          <h2 className="text-2xl font-semibold text-foreground">
            Machine Learning
          </h2>
          <p className="text-lg text-muted-foreground">and more...</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
