
import { cn } from "@/lib/utils";

interface SkillTagProps {
  name: string;
  level?: number;
  className?: string;
}

const SkillTag = ({ name, level = 0, className }: SkillTagProps) => {
  const getLevelClass = () => {
    switch (level) {
      case 3: // Expert
        return "bg-primary/15 text-primary border-primary/30";
      case 2: // Advanced
        return "bg-blue-500/10 text-blue-600 border-blue-200";
      case 1: // Intermediate
        return "bg-blue-400/10 text-blue-500 border-blue-100";
      default: // Basic or unspecified
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div
      className={cn(
        "px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 hover:shadow-sm",
        getLevelClass(),
        className
      )}
    >
      {name}
    </div>
  );
};

export default SkillTag;
