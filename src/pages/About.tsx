const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 animate-slide-up">
            <div className="bg-card p-8 rounded-2xl shadow-lg border border-primary/10">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Current Status</h2>
              <p className="text-muted-foreground leading-relaxed">
                I'm currently pursuing my Master of Science in Data Science at Western Michigan University, 
                set to graduate in April 2025. My academic journey has been driven by a deep curiosity about 
                how data can transform decision-making and create meaningful impact.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-lg border border-primary/10">
              <h2 className="text-2xl font-semibold mb-4 text-primary">My Passion</h2>
              <p className="text-muted-foreground leading-relaxed">
                I'm passionate about data engineering, machine learning, and the art of turning complex 
                analytics into actionable insights. Whether it's building robust data pipelines, developing 
                intelligent systems, or optimizing workflows, I thrive on challenges that push the boundaries 
                of what's possible with data.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-lg border border-primary/10">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Professional Focus</h2>
              <p className="text-muted-foreground leading-relaxed">
                With hands-on experience in data engineering, analytics, and system integration, I bring 
                a blend of technical expertise and practical problem-solving. I'm excited to contribute 
                to innovative, data-driven solutions that make a real difference.
              </p>
            </div>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl border border-primary/20">
              <h2 className="text-2xl font-semibold mb-6">Quick Facts</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4"></div>
                  <div>
                    <p className="font-medium">Education</p>
                    <p className="text-muted-foreground text-sm">M.S. Data Science - WMU (2025)</p>
                    <p className="text-muted-foreground text-sm">B.Tech Computer Science - JNTU (2021)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4"></div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground text-sm">Kalamazoo, Michigan</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4"></div>
                  <div>
                    <p className="font-medium">Interests</p>
                    <p className="text-muted-foreground text-sm">Data Engineering, Machine Learning, Analytics</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4"></div>
                  <div>
                    <p className="font-medium">Certifications</p>
                    <p className="text-muted-foreground text-sm">Google Data Analytics Professional (Coursera, 2025)</p>
                  </div>
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
