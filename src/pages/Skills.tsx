const Skills = () => {
  const allSkills = [
    { name: "Python", level: 95 },
    { name: "SQL", level: 90 },
    { name: "R", level: 85 },
    { name: "Java", level: 85 },
    { name: "C", level: 80 },
    { name: "JavaScript", level: 70 },
    { name: "NumPy", level: 90 },
    { name: "Pandas", level: 90 },
    { name: "Scikit-learn", level: 85 },
    { name: "TensorFlow", level: 75 },
    { name: "Matplotlib", level: 85 },
    { name: "Seaborn", level: 85 },
    { name: "Data Preprocessing", level: 90 },
    { name: "EDA", level: 90 },
    { name: "Regression Analysis", level: 85 },
    { name: "Text Mining", level: 80 },
    { name: "NLP", level: 75 },
    { name: "SAS Programming", level: 80 },
    { name: "MS Excel", level: 85 },
    { name: "Tableau", level: 80 },
    { name: "R Shiny", level: 75 },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header */}
        <div className="mb-20 text-center animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold text-muted-foreground/70 mb-2">
            Skills
          </h1>
        </div>

        {/* Skills Grid */}
        <div className="space-y-12 max-w-4xl mx-auto animate-fade-in">
          {/* First Row - 5 skills */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {allSkills.slice(0, 5).map((skill, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-base font-medium text-foreground text-center">
                  {skill.name}
                </h3>
                <div className="relative h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-full bg-foreground rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${skill.level}%`,
                      animationDelay: `${idx * 0.1}s`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - 5 skills */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {allSkills.slice(5, 10).map((skill, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-base font-medium text-foreground text-center">
                  {skill.name}
                </h3>
                <div className="relative h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-full bg-foreground rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${skill.level}%`,
                      animationDelay: `${(idx + 5) * 0.1}s`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Third Row - 5 skills */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {allSkills.slice(10, 15).map((skill, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-base font-medium text-foreground text-center">
                  {skill.name}
                </h3>
                <div className="relative h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-full bg-foreground rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${skill.level}%`,
                      animationDelay: `${(idx + 10) * 0.1}s`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Fourth Row - 5 skills */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {allSkills.slice(15, 20).map((skill, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-base font-medium text-foreground text-center">
                  {skill.name}
                </h3>
                <div className="relative h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-full bg-foreground rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${skill.level}%`,
                      animationDelay: `${(idx + 15) * 0.1}s`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Fifth Row - remaining skill */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {allSkills.slice(20).map((skill, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-base font-medium text-foreground text-center">
                  {skill.name}
                </h3>
                <div className="relative h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-full bg-foreground rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${skill.level}%`,
                      animationDelay: `${(idx + 20) * 0.1}s`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center space-y-4 animate-fade-in">
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
