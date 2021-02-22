import React from "react";
import "./styles.css";

const Box: React.FC = ({ children }) => {
  return <div className="box-container">{children}</div>;
};

export default Box;
