import React from "react";
import { IconType } from "react-icons";
import "./styles.css";

interface TextInputProps {
  label: string;
  Icon?: IconType;
  onChange: (text: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ label, Icon, onChange }) => {
  return (
    <div className="text-input-container">
      <label className="text-input-field-label">{label}</label>
      <input
        onChange={(event) => onChange(event.currentTarget.value)}
        type="text"
        className="text-input-field"
      />
      {Icon && (
        <button className="text-input-icon-button">
          <Icon size="24px" color="#ffffff" />
        </button>
      )}
    </div>
  );
};

export default TextInput;
