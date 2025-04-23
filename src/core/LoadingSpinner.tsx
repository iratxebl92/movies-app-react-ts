// src/components/Common/LoadingSpinner.tsx

export const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-transparent">
      <div className="relative h-20 w-20">
        <div className="absolute inset-0 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
        <div className="absolute inset-2 border-4 border-b-transparent border-blue-300 rounded-full animate-spin-slow"></div>
        <div className="absolute inset-4 bg-blue-100 rounded-full"></div>
      </div>
    </div>
  );
};
