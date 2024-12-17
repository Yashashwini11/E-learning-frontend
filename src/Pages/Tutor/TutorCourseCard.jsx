import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const TutorCourseCard = ({ id, title, progress }) => {
  const navigate=useNavigate();
  const handlebutton=()=>{
      navigate('/tutor/material')
  }
  return (
    <div className="p-6 border border-blue-400 rounded-lg shadow-md w-full md:w-[320px]">
      <h2 className="text-xl mb-2">{id}</h2>
      <h2 className="text-xl mb-2">{title}</h2>
      
      <div className="flex justify-between mt-4">
        <Link to={`/tutor/course/${id}`}>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            View
          </button>
        </Link>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={handlebutton}>
            Add Material
          </button>
      </div>
    </div>
  );
};

export default TutorCourseCard;
