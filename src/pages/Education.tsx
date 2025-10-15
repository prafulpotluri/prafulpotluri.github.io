import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Data Science",
      institution: "Western Michigan University",
      location: "Kalamazoo, MI",
      date: "Graduated April 2025",
      icon: GraduationCap,
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Jawaharlal Nehru Technological University",
      location: "India",
      date: "Graduated November 2021",
      icon: GraduationCap,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-background to-surface-alt">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Education</h1>
          <div className="h-1 w-20 bg-primary rounded-sm"></div>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <div
                key={index}
                className="group bg-card rounded-xl shadow-md border-l-4 border-primary p-8 hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h2 className="text-2xl font-bold text-foreground mb-2">{edu.degree}</h2>
                    <h3 className="text-lg font-semibold text-primary mb-3">{edu.institution}</h3>
                    
                    <div className="flex flex-wrap gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>📍</span>
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 border border-primary/30 animate-fade-in">
          <h2 className="text-2xl font-semibold mb-4 text-center text-foreground">Academic Focus</h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My academic journey has equipped me with a strong foundation in data science principles, statistical analysis, 
            machine learning algorithms, and practical application of data-driven methodologies to solve complex real-world problems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
