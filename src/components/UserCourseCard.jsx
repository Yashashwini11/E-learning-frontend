import React from 'react';
import { Link } from 'react-router-dom';

const UserCourseCard = ({ id, title, progress }) => {
  return (
    <div className="p-6 border border-blue-400 rounded-lg shadow-md w-full md:w-[320px]">
      <h2 className="text-xl mb-2">{id}</h2>
      <h2 className="text-xl mb-2">{title}</h2>
      
      <Link to={`/course/${id}`}>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          View
        </button>
      </Link>
    </div>
  );
};

export default UserCourseCard;
