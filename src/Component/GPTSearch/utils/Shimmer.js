export const Shimmer = () => {
  return (
    <div className="absolute inset-0 top-[115%] lg:top-[32%] md:top-[60%] sm:top-[65%] flex flex-col items-center justify-center">
      {/* Centered shimmer header */}
      <div className="mb-6">
        <p className="h-3 w-48 lg:h-5 lg:w-72 sm:w-52 md:w-64 bg-gray-300 rounded-md animate-pulse"></p>
      </div>

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
              <div className="w-24 h-40 sm:w-24 sm:h-36 md:w-36 md:h-48 lg:w-48 lg:h-56 rounded-xl bg-gray-300"></div>
              {/* Shimmer for Title */}
              <div className="mt-2 w-32 h-3 bg-gray-300 rounded-md"></div>
            </div>
          ))}
      </div>
    </div>
  );
};
