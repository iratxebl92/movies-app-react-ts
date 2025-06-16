import SkeletonKeywords from "./SkeletonKeywords";

export default function MovieSkeletonList() {
  return (
    <>
      {Array.from({ length: 20 }).map((_, index) => (
        <SkeletonKeywords key={index} />
      ))}
    </>
  );
}
