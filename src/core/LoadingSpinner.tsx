// src/components/Common/LoadingSpinner.tsx
export const LoadingSpinner = () => {
    return (
      <div className="flex items-center justify-center min-h-[100vh] w-full">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  };