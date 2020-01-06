import React from "react";

const Icon = props => {
  let { src, className = "rotate", id, alt, width, onClick, height } = props;
  return (
    <img
      src={src}
      className={className}
      id={id}
      alt={alt}
      width={width}
      height={height}
      onClick={() => onClick(id)}
    />
  );
};

export default Icon;
