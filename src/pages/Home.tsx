import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-16">
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-surface-alt via-background to-surface">
        {/* Geometric accents */}
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-primary/20 rounded-full opacity-30"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 border-2 border-primary/30 rounded-lg rotate-12 opacity-20"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/5 rounded-lg rotate-45 opacity-40"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Main content */}
            <div className="animate-fade-in">
              <div className="mb-6">
                <div className="inline-block w-12 h-1 bg-primary mb-8"></div>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Making data look like{" "}
                <span className="text-primary">common sense</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light leading-relaxed">
                Data Engineer & Data Science Graduate blending analytical insights with real-world solutions
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button
                  onClick={() => navigate("/projects")}
                  size="lg"
                  className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold"
                >
                  Explore My Work
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <Button
                  onClick={() => navigate("/contact")}
                  variant="outline"
                  size="lg"
                  className="px-8 py-6 text-lg border-border hover:border-primary hover:bg-primary/10 hover:text-primary"
                >
                  Contact Me
                </Button>
              </div>
            </div>

            {/* Right side - Stats/Info */}
            <div className="animate-slide-up hidden lg:block" style={{ animationDelay: '0.2s' }}>
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
                <h3 className="text-sm font-semibold text-muted-foreground mb-6 tracking-wider uppercase">Quick Overview</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">2+</div>
                    <p className="text-muted-foreground">Years of Experience</p>
                  </div>
                  
                  <div className="h-px bg-border"></div>
                  
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">3</div>
                    <p className="text-muted-foreground">Featured Projects</p>
                  </div>
                  
                  <div className="h-px bg-border"></div>
                  
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">M.S.</div>
                    <p className="text-muted-foreground">Data Science (2025)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
