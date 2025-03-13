
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import SkillTag from "./SkillTag";

export interface ProjectProps {
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const ProjectCard = ({ 
  title, 
  description, 
  longDescription, 
  image, 
  technologies, 
  liveUrl, 
  githubUrl,
  featured = false
}: ProjectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      <div 
        className={cn(
          "group rounded-xl overflow-hidden bg-white border border-gray-100/70 shadow-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
          featured && "md:col-span-2"
        )}
      >
        <div className="overflow-hidden aspect-video">
          <div className="relative w-full h-full overflow-hidden bg-gray-100">
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-8 w-8 rounded-full border-2 border-primary/30 border-t-primary animate-spin"></div>
              </div>
            )}
            <img 
              src={image} 
              alt={title}
              className={cn(
                "w-full h-full object-cover transition-all duration-700",
                imageLoaded ? "opacity-100" : "opacity-0",
                "group-hover:scale-105 transition-transform duration-700"
              )}
              onLoad={() => setImageLoaded(true)}
              loading="lazy"
            />
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-medium mb-2">{title}</h3>
          <p className="text-foreground/70 mb-4">{description}</p>
          
          <div className="flex flex-wrap gap-1.5 mb-5">
            {technologies.slice(0, 4).map((tech, index) => (
              <SkillTag key={index} name={tech} className="text-xs px-2 py-1" />
            ))}
            {technologies.length > 4 && (
              <span className="text-xs text-foreground/60 flex items-center px-2">
                +{technologies.length - 4} more
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setIsOpen(true)}
              className="text-primary hover:text-primary/90 hover:bg-primary/5"
            >
              View Details
            </Button>
            
            <div className="flex-1"></div>
            
            {githubUrl && (
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-foreground/70 hover:text-foreground transition-colors"
                aria-label="View on GitHub"
              >
                <Github size={18} />
              </a>
            )}
            
            {liveUrl && (
              <a 
                href={liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-foreground/70 hover:text-foreground transition-colors"
                aria-label="View live site"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden">
          <div className="aspect-video w-full overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <DialogHeader>
              <DialogTitle className="text-2xl font-medium">{title}</DialogTitle>
              <DialogDescription className="text-foreground/70 mt-2">
                {description}
              </DialogDescription>
            </DialogHeader>
            
            <div className="mt-4 space-y-4">
              <p className="text-foreground/80">{longDescription || description}</p>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-1.5">
                  {technologies.map((tech, index) => (
                    <SkillTag key={index} name={tech} className="text-xs px-2 py-1" />
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-3 pt-2">
                {liveUrl && (
                  <Button asChild className="flex-1">
                    <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      View Live
                    </a>
                  </Button>
                )}
                
                {githubUrl && (
                  <Button asChild variant="outline" className="flex-1">
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      View Code
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectCard;
