import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  const handleDownloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/Praful_Resume.pdf';
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
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            {/* Main content */}
            <div className="animate-fade-in">
              <div className="mb-6">
                <div className="inline-block w-16 h-1 bg-primary mb-8"></div>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-foreground">
                Making data look like{" "}
                <span className="text-primary">common sense</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl leading-relaxed">
                Driven Data Science graduate with hands-on data analyst experience, passionate about applying analytical insights to real-world challenges and contributing to data-driven solutions.
              </p>
              
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
