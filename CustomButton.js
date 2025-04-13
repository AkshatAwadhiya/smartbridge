import React from 'react';

const CustomButton = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 mt-6"
    >
      Click Me
    </button>
  );
};

export default CustomButton;
