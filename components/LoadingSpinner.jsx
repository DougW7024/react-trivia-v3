import { useEffect, useState } from "react";

const LoadingDemo = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setHasShown(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading && hasShown) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center space-y-4">
          <p className="text-green-600 text-xl font-medium">
            Loading Complete!
          </p>
          <button
            onClick={() => {
              setIsLoading(true);
              setHasShown(false);
              setTimeout(() => {
                setIsLoading(false);
                setHasShown(true);
              }, 5000);
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Reload
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
        <p className="text-blue-500 text-lg font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingDemo;
