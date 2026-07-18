import { Skeleton, Card } from "@heroui/react";
export default function Loading() {
 
  return (
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[...Array(4)].map((_, index) => (
        <Card key={index} className="p-4 space-y-4">

          <Skeleton className="rounded-xl">
            <div className="h-48 rounded-xl bg-default-300" />
          </Skeleton>

          <Skeleton className="rounded-lg">
            <div className="h-5 w-3/4 rounded-lg bg-default-300" />
          </Skeleton>

          <Skeleton className="rounded-lg">
            <div className="h-4 w-full rounded-lg bg-default-200" />
          </Skeleton>

          <Skeleton className="rounded-lg">
            <div className="h-4 w-2/3 rounded-lg bg-default-200" />
          </Skeleton>
        </Card>
      ))}
    </div>
  )
}