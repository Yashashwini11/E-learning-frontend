import { deleteCourse } from '@/services/Api';
import React from 'react';


const AdminCourseCard = ({id, name, title,   category, difficultyLevel, syllabus, schedule, prerequisites }) => {
  return (
    <div className="p-6 border border-blue-400 rounded-lg shadow-md w-full md:w-[320px]">
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      <h2 className="text-2xl font-bold mb-2">{id}</h2>
      <p className="text-xl mb-2">Title: {title}</p>
      <p className="dark:text-white mb-2">Category: {category}</p>
      <p className="dark:text-white mb-2">Difficulty Level: {difficultyLevel}</p>
      <p className="dark:text-white mb-2">Syllabus: {syllabus}</p>
      <p className="dark:text-white mb-2">Schedule: {schedule}</p>
      <p className="dark:text-white mb-4">Prerequisites: {prerequisites}</p>
      <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
    </div>
  );
};

export default AdminCourseCard;
