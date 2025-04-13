import React, { useState } from 'react';

const TextUpdater = () => {
  const [text, setText] = useState('');

  return (
    <div className="p-6 max-w-md mx-auto text-center">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border px-3 py-2 w-full rounded shadow"
        placeholder="Type something..."
      />
      <p className="mt-4 text-lg font-medium text-gray-700">You typed: {text}</p>
    </div>
  );
};

export default TextUpdater;
