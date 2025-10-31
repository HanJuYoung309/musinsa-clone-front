export default function SkeletonCard(){
return (
<div className="animate-pulse">
<div className="aspect-[3/4] w-full rounded-2xl bg-gray-200" />
<div className="mt-2 h-3 w-24 rounded bg-gray-200" />
<div className="mt-1 h-3 w-40 rounded bg-gray-200" />
<div className="mt-2 h-4 w-16 rounded bg-gray-200" />
</div>
)
}