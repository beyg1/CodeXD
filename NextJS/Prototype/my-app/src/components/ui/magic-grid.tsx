import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "../magicui/animated-grid-pattern";

export default function AnimatedGridPatternDemo() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[150%] skew-y-12",
        )}
      />
    </div>
  );
}

