import React from "react";

const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {Array(12)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className="h-48 rounded-xl bg-gray-200 relative overflow-hidden"
          >
            <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
