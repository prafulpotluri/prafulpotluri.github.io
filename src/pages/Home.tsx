import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Linkedin, Github, Mail } from "lucide-react";
import prafulPhoto from "@/assets/praful-photo.jpg";

const Home = () => {
  const navigate = useNavigate();

  const handleDownloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = 'public/Praful_Resume.pdf';
    link.download = 'Praful_Chand_Potluri_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen pt-16">
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-surface-alt via-background to-sky-blue-light/20">
        {/* Geometric accents */}
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-primary/30 rounded-full"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 border-2 border-primary/40 rounded-lg rotate-12"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-primary/10 rounded-lg rotate-45"></div>
        
        {/* Background Photo */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 opacity-30 lg:opacity-60">
          <div className="absolute top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-sky-blue-light/10 rounded-full blur-2xl"></div>
          <img 
            src={prafulPhoto} 
            alt="Praful Chand Potluri - Data Analyst"
            className="w-full h-full object-cover object-center rounded-l-3xl"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <div className="mb-6">
              <div className="inline-block w-16 h-1 bg-primary mb-8"></div>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-3">
              Praful Chand Potluri
            </h2>
            
            <p className="text-lg md:text-xl text-primary font-semibold mb-4">
              Data Analyst
            </p>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-10 leading-tight text-foreground">
              Making data look like{" "}
              <span className="text-primary">common sense</span>
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Button
                onClick={() => navigate("/projects")}
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Explore My Work
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button
                onClick={handleDownloadResume}
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all shadow-md hover:shadow-lg"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8 pt-8 border-t border-border/50">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:text-[#0077b5] transition-colors"
              >
                <a
                  href="https://www.linkedin.com/in/praful-chand-potluri"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:text-foreground transition-colors"
              >
                <a
                  href="https://github.com/prafulpotluri"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:text-primary transition-colors"
              >
                <a
                  href="mailto:prafulpotluri@gmail.com"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="absolute bottom-8 left-0 right-0 z-10">
          <div className="container mx-auto px-6">
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} Praful Chand Potluri. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
