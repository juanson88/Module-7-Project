import React from "react";
import "./SkeletonLoader.css";

const SkeletonLoader = ({ type }) => {
  return (
    <>
      {type === "searchResults" ? (
        <div className="skeleton-container">
          <div className="search-results__container">
            <div className="skeleton-image"></div>
            <div className="skeleton-title"></div>
            <div className="skeleton-year"></div>
            <div className="skeleton-type"></div>
            <div className="skeleton-id"></div>
          </div>
        </div>
      ) : type === "movieInfo" ? (
        <div className="movie-info__container">
          <div className="movie-info__content">
            <div className="title-image__movie-info">
              <div className="skeleton-title"></div>
              <div className="skeleton-image"></div>
            </div>
            <div className="description__movie-info">
              <div className="skeleton-date-released"></div>
              <div className="skeleton-rating"></div>
              <div className="skeleton-run-time"></div>
              <div className="skeleton-genre"></div>
              <div className="skeleton-director"></div>
              <div className="skeleton-actors"></div>
              <div className="skeleton-box-office"></div>
              <div className="skeleton-plot"></div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SkeletonLoader;
