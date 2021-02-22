import React from "react";
import "./styles.css";

interface InfoProps {
  label: string;
  content: string | number;
}

const Info: React.FC<InfoProps> = ({ label, content }) => {
  return (
    <div className="info-content">
      <p className="info-content-label">{label}</p>
      <p className="info-content-text">{content}</p>
    </div>
  );
};

export default Info;
