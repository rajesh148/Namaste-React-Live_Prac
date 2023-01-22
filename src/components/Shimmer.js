import React from "react";
import { ShimmerPostList } from "react-shimmer-effects-18";

const Shimmer = () => {
  return (
    <div className="shimmer">
      <ShimmerPostList postStyle="STYLE_THREE" col={3} row={2} gap={30} />;
    </div>
  );
};

export default Shimmer;
