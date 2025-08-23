import React from "react";

const BlueButton = ({ children, onClick, className="" }) => {
  return (
    <button className={`px-3 py-2 bg-gradient-to-br from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 cursor-pointer rounded-md text-white ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default BlueButton;
