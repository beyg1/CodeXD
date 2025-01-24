import { Skeleton } from "@/components/ui/skeleton"
 
export default function SkeletonDemo() {
  return (
    <div className="flex p-10 justify-center space-x-4 bg-orange-200 h-screen">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px] bg-blend-darken" />
        <Skeleton className="h-4 w-[200px] bg-blend-darken" />
      </div>
    </div>
  )
}