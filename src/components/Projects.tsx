
import { useRef } from "react";
import { useInView } from "@/utils/animations";
import ProjectCard, { ProjectProps } from "./ProjectCard";

const Projects = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  
  const projects: ProjectProps[] = [
    {
      title: "E-Commerce Dashboard",
      description: "A comprehensive admin dashboard for online retailers",
      longDescription: "A full-featured e-commerce administration platform that helps store owners manage their products, track inventory, process orders, and analyze sales performance. Built with React, TypeScript, and a custom design system.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      technologies: ["React", "TypeScript", "Redux", "Tailwind CSS", "Chart.js", "Node.js", "Express"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Financial Analytics App",
      description: "Data visualization platform for financial metrics",
      longDescription: "Interactive financial analytics application that transforms complex financial data into intuitive visualizations. Helps investors and financial advisors make data-driven decisions with real-time dashboards and customizable reports.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      technologies: ["React", "D3.js", "TypeScript", "Firebase", "Material UI"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management Platform",
      description: "Team collaboration and project management tool",
      longDescription: "Collaborative task management application designed for modern teams. Features include task assignment, deadline tracking, file sharing, progress visualization, and team communication tools to enhance productivity and project coordination.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Healthcare Portal",
      description: "Patient and doctor management system",
      longDescription: "Secure healthcare portal that streamlines patient management, scheduling, and medical record keeping. Provides a seamless interface for healthcare providers to access patient information while maintaining strict compliance with privacy regulations.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      technologies: ["React", "Node.js", "MongoDB", "WebRTC", "Tailwind CSS", "Express"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6" ref={ref as React.RefObject<HTMLDivElement>}>
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block py-1 px-3 mb-3 text-xs font-medium bg-primary/10 text-primary rounded-full">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Featured Projects
          </h2>
          <p className="text-foreground/70">
            A selection of projects that showcase my skills and experience.
            Each project reflects my dedication to clean code and exceptional user experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`transition-all duration-700 delay-${index * 100} ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                transitionProperty: 'opacity, transform'
              }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
