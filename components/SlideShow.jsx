import React, { useState, useEffect } from "react";

export default function SlideShow({ id, delay, sources, className }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCurrentSlideIndex((currentSlideIndex + 1) % sources.length);
    }, delay * 1000);
  });

  return (
    <div
      id={id ?? ""}
      style={{
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundImage: `url(${sources[currentSlideIndex]})`,
      }}
      className={className}
    />
  );
}
