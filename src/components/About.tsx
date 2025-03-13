
import { useRef } from "react";
import { useInView } from "@/utils/animations";
import SkillTag from "./SkillTag";
import { staggeredAnimationProps } from "@/utils/animations";

const About = () => {
  const { ref, isInView } = useInView();
  
  const skills = [
    { name: "React", level: 3 },
    { name: "TypeScript", level: 3 },
    { name: "JavaScript", level: 3 },
    { name: "Node.js", level: 2 },
    { name: "Next.js", level: 2 },
    { name: "CSS/SCSS", level: 3 },
    { name: "Tailwind CSS", level: 3 },
    { name: "Redux", level: 2 },
    { name: "GraphQL", level: 2 },
    { name: "REST API", level: 3 },
    { name: "Git", level: 3 },
    { name: "Testing", level: 2 },
    { name: "AWS", level: 1 },
    { name: "Docker", level: 1 },
    { name: "CI/CD", level: 2 },
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column with image */}
          <div className="relative" ref={ref}>
            <div className={`absolute -top-5 -left-5 w-24 h-24 bg-primary/10 rounded-xl transition-opacity duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}></div>
            <div className={`absolute -bottom-5 -right-5 w-32 h-32 bg-blue-400/10 rounded-xl transition-opacity duration-700 delay-200 ${isInView ? 'opacity-100' : 'opacity-0'}`}></div>
            <div className={`relative z-10 rounded-xl overflow-hidden shadow-card subtle-border aspect-square transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Developer at work"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Right column with text */}
          <div>
            <div {...staggeredAnimationProps(0)}>
              <span className="inline-block py-1 px-3 mb-3 text-xs font-medium bg-primary/10 text-primary rounded-full">
                About Me
              </span>
            </div>
            
            <h2 {...staggeredAnimationProps(1)} className="text-3xl md:text-4xl font-semibold mb-6">
              Crafting digital experiences through elegant code
            </h2>
            
            <div {...staggeredAnimationProps(2)} className="text-foreground/80 space-y-4 mb-8">
              <p>
                I'm a passionate software developer with over 5 years of experience building beautiful, functional web applications. I specialize in frontend development with React and TypeScript, but I'm comfortable working across the full stack.
              </p>
              <p>
                My approach combines technical excellence with an eye for design and user experience. I believe great software should be both powerful and a pleasure to use.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open source, or enjoying the outdoors.
              </p>
            </div>
            
            <div id="skills">
              <h3 {...staggeredAnimationProps(3)} className="text-xl font-medium mb-4">
                Technical Skills
              </h3>
              
              <div {...staggeredAnimationProps(4)} className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <SkillTag key={index} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
