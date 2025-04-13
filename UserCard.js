import React from 'react';

const UserCard = ({ name, email }) => {
  return (
    <div className="max-w-sm mx-auto bg-white border shadow-md rounded-lg p-4 mt-6">
      <h2 className="text-xl font-semibold text-blue-600">{name}</h2>
      <p className="text-gray-600">{email}</p>
    </div>
  );
};

export default UserCard;
