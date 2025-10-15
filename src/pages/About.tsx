import prafulPhoto from "@/assets/praful-about.jpg";

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-surface-alt to-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-12 animate-fade-in flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">About Me</h1>
            <div className="h-1 w-20 bg-primary rounded-sm"></div>
          </div>
          <div className="flex-shrink-0">
            <img 
              src={prafulPhoto} 
              alt="Data Analyst profile photo" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover shadow-lg border-2 border-primary/20"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Bio */}
          <div className="space-y-6 animate-slide-up">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Driven Data Science graduate from <span className="text-primary font-semibold">Western Michigan University</span> (April 2025) with proven experience in data analyst roles and a passion for applying analytical insights to real-world challenges.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I bring a blend of technical expertise and hands-on project experience to dynamic, data-focused teams, contributing to innovative, data-driven solutions and continuous improvement.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm currently seeking opportunities in <span className="text-primary font-semibold">Data Analyst</span> roles where I can leverage my skills in data engineering, machine learning, and analytics to drive meaningful business outcomes.
            </p>
          </div>

          {/* Right: Quick Facts */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-card rounded-2xl shadow-lg border border-border p-8">
              <h3 className="text-sm font-semibold text-primary mb-6 tracking-wider uppercase">Quick Facts</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">M.S.</div>
                  <p className="text-muted-foreground">Data Science, WMU (2025)</p>
                </div>
                
                <div className="h-px bg-border"></div>
                
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">4+</div>
                  <p className="text-muted-foreground">Years of Experience</p>
                </div>
                
                <div className="h-px bg-border"></div>
                
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">3</div>
                  <p className="text-muted-foreground">Featured Projects</p>
                </div>
                
                <div className="h-px bg-border"></div>
                
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">99%</div>
                  <p className="text-muted-foreground">Data Accuracy Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
