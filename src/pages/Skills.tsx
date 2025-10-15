import { Code, Database, LineChart, Wrench, FileSpreadsheet } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      skills: ["Python", "Java", "R", "C", "JavaScript", "SQL"],
      color: "from-primary/20 to-primary/5",
    },
    {
      title: "Statistical Analysis",
      icon: LineChart,
      skills: ["SAS Programming"],
      color: "from-primary/15 to-primary/5",
    },
    {
      title: "Machine Learning",
      icon: Database,
      skills: [
        "Data Preprocessing",
        "EDA",
        "Regression Analysis",
        "Text Mining",
        "NLP",
      ],
      color: "from-primary/20 to-primary/5",
    },
    {
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
      color: "from-primary/15 to-primary/5",
    },
    {
      title: "Other Tools",
      icon: FileSpreadsheet,
      skills: ["MS Excel", "PowerPoint", "Word", "Tableau", "R Shiny"],
      color: "from-primary/20 to-primary/5",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Skills</h1>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group bg-card rounded-2xl shadow-lg border border-primary/10 p-6 hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                <h2 className="text-xl font-semibold mb-4">{category.title}</h2>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-lg transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20 animate-fade-in">
          <h2 className="text-2xl font-semibold mb-4 text-center">Core Competencies</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="text-center">
              <h3 className="font-semibold text-primary mb-2">Data Engineering</h3>
              <p className="text-sm text-muted-foreground">
                Building robust data pipelines and managing enterprise-scale data systems
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-primary mb-2">Analytics & Insights</h3>
              <p className="text-sm text-muted-foreground">
                Transforming complex data into actionable business intelligence
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-primary mb-2">Machine Learning</h3>
              <p className="text-sm text-muted-foreground">
                Developing intelligent systems using advanced ML algorithms
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
