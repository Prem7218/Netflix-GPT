export const Shimmer = () => {
  return (
    <div className="absolute inset-0 lg:top-[0%] md:top-[22%] flex flex-col items-center justify-center">
      {/* Grid for shimmer items */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {Array(12)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center animate-pulse"
            >
              {/* Shimmer for Image */}
              <div className="w-24 h-40 md:w-36 md:h-36 lg:w-40 lg:h-48 rounded-xl bg-gray-300"></div>
              {/* Shimmer for Title */}
              <div className="mt-2 w-32 h-3 bg-gray-300 rounded-md"></div>
            </div>
          ))}
      </div>
    </div>
  );
};
