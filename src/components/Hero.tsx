
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useTypewriter, useSmoothScroll } from "@/utils/animations";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollTo } = useSmoothScroll();
  
  const title = useTypewriter("Software Developer", 70, 500);
  const subtitle = useTypewriter("Building beautiful digital experiences", 50, 1800);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-16">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-70">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-rotate-slow"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-blue-400/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 flex flex-col items-center text-center relative z-10">
        <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
          <span className="inline-block py-1 px-3 mb-6 text-xs font-medium bg-primary/10 text-primary rounded-full animate-fade-in">
            Available for work
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-semibold mb-6 tracking-tight">
          <span className="relative overflow-hidden block">
            <span className={`transition-transform duration-700 delay-100 ${isLoaded ? 'translate-y-0' : 'translate-y-full'}`}>
              Hey, I'm Alex
            </span>
          </span>
          <span className="relative overflow-hidden block mt-1">
            <span className={`text-gradient transition-transform duration-700 delay-200 ${isLoaded ? 'translate-y-0' : 'translate-y-full'}`}>
              {title}
            </span>
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mb-8 animate-fade-in animation-delay-500">
          {subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-700">
          <Button 
            size="lg" 
            onClick={() => scrollTo("projects")}
            className="bg-primary text-white hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
          >
            View My Work
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => scrollTo("contact")}
            className="border-foreground/20 hover:bg-foreground/5"
          >
            Get In Touch
          </Button>
        </div>
        
        <button 
          onClick={() => scrollTo("about")}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center mt-24 text-sm text-foreground/60 hover:text-foreground transition-colors animate-fade-in animation-delay-1000"
          aria-label="Scroll down"
        >
          <span className="mb-2">Scroll down</span>
          <ArrowDown size={20} className="animate-float" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
