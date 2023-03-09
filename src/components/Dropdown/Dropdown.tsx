/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import "./Dropdown.scss";

type Props = {
  onChange: any;
  options: string[];
  isOpen: boolean;
  toggleDropdown: any;
};

const Dropdown: React.FC<Props> = ({
  onChange,
  options,
  isOpen,
  toggleDropdown,
}) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    toggleDropdown();
    onChange(option);
  };

  return (
    <div className="dropdown text-body">
      <div className="dropdown__option" onClick={() => toggleDropdown()}>
        {selectedOption}
      </div>

      {isOpen && (
        <div className="dropdown__option-container">
          {options.map((option) => (
            <div
              key={option}
              className={`option ${
                selectedOption === option ? "selected" : ""
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
