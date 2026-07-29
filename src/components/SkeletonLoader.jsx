import React from "react";
import "./SkeletonLoader.css";

const SkeletonLoader = () => {
  return (
    <div className="skeleton-loader">
      <div className="skeleton-image"></div>
      <div className="skeleton-title"></div>
      <div className="skeleton-description"></div>
    </div>
  );
};

export default SkeletonLoader;
