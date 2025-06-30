// Connection.js
import React from "react";

const Connection = ({ id, className }) => {
  const getHeightPercentage = () => {
    switch (className) {
      case "connection_options":
        return "58%";
      case "connection_second_options":
        return "50%";
      case "connection_child":
        return "42%";
      default:
        return "42%";
    }
  };

  return (
    <div
      key={id}
      id={id}
      className={`${className} pt-${
        className === "connection_options" ||
        className === "connection_second_options"
          ? 3
          : 1.5
      } z-[${
        className === "connection_options" ||
        className === "connection_second_options"
          ? 0
          : 50
      }]`}
    >
      <div
        id={`steps_${id}`}
        className="connection_step"
        style={{ height: getHeightPercentage() }}
      />
    </div>
  );
};

export default Connection;
