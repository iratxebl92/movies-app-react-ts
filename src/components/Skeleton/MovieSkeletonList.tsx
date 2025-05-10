import SkeletonKeywords from "./SkeletonKeywords";

export default function MovieSkeletonList() {
  return (
    <div className="flex flex-wrap gap-4">
      {Array.from({ length: 20 }).map((_, index) => (
        <SkeletonKeywords key={index} />
      ))}
    </div>
  );
}
