import React from "react";
import "./general.css";

const SelectInput = ({
  label,
  options = [],
  className = "",
  value,
  setValue,
}) => {
  const handleSelect = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={`select-container ${className}`}>
      {label && <label className="select-label">{label}</label>}

      <select
        value={value}
        onChange={handleSelect}
        className="select-field"
      >
        {options.map((option, index) => {
          // If option is an object: { value, label }
          if (typeof option === "object") {
            return (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            );
          }

          // If option is a primitive (string/number)
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectInput;