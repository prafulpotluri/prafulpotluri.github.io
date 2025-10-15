import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-16">
      <section 
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(240, 249, 255, 0.9), rgba(255, 255, 255, 0.95)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Geometric accents */}
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-primary/20 rounded-full opacity-50"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 border-2 border-primary/30 rounded-lg rotate-12 opacity-40"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Making data look like{" "}
              <span className="text-gradient">common sense</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
              Data Engineer & Data Science Graduate blending analytical insights with real-world solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => navigate("/projects")}
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
              >
                Explore My Work
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button
                onClick={() => navigate("/contact")}
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg border-primary/30 hover:border-primary hover:bg-primary/5"
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
