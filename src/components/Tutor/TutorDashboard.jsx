import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import UserCourseCard from '../../components/UserCourseCard';
import { getUserCourses } from '@/services/Api'; // Adjust the import path as needed
import TutorCourseCard from '@/Pages/Tutor/TutorCourseCard';

const TutorDashboard = () => {
  const [currentCourses, setCurrentCourses] = useState([]);
  const userId = localStorage.getItem('userId');
  const username = localStorage.getItem('username');
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const fetchUserCourses = async () => {
      try {
        if (userId) {
          const response = await getUserCourses(userId);
          setCurrentCourses(response.data); // Assuming response.data is an array of course objects
        }
      } catch (error) {
        console.error('Error fetching user courses:', error);
      }
    };

    fetchUserCourses();
  }, [userId]);

  const handleViewCourse = (courseId) => {
    navigate('/course/${courseId}'); // Navigate to course materials page
  };

  return (
    <div className="pt-[2vh] pl-[16.6667%] w-full min-h-screen">
      <div className="max-w-7xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">Welcome back, {username}!</h1>
        
        <div className="mb-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4 pt-10">My Courses</h2>
            <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-6 px-32">
              {currentCourses.length > 0 ? (
                currentCourses.map((course) => (
                  <TutorCourseCard
                    key={course.id} 
                    title={course.title}
                    id={course.id}
                    onClick={() => handleViewCourse(course.id)} // Pass course ID to handleViewCourse
                  />
                ))
              ) : (
                <p className="text-center text-gray-500">No courses enrolled yet</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorDashboard;
