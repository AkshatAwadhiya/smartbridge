import React, { useState } from 'react';

const SimpleForm = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted value:", inputValue);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-6">
      <input
        type="text"
        className="border border-gray-300 px-3 py-2 w-full rounded mb-3"
        placeholder="Enter something"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Submit
      </button>
    </form>
  );
};

export default SimpleForm;
