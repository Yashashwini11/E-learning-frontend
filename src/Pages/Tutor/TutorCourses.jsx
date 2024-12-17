import React, { useEffect, useState } from 'react';
import { getCourses, handleEnrollment } from '@/services/Api'; // Ensure handleEnrollment is imported
import { Button } from '@/components/ui/button';

const TutorCourses = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTitle, setSelectedTitle] = useState('');
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await getCourses();
        setCourses(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  const handleDifficultyChange = (event) => {
    setSelectedDifficulty(event.target.value);
  };
  
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  
  const handleTitleChange = (event) => {
    setSelectedTitle(event.target.value);
  };

  const handleEnrollClick = async (course_id) => {
    try {
      const user_id = localStorage.getItem('userId');
      console.log('User ID:', user_id);
      console.log('Course ID:', course_id);
      
      if (!user_id) {
        alert('User not logged in');
        return;
      }
      
      // Log payload before sending
      console.log('Sending Enrollment Request:', { user_id, course_id });
  
      // Make the enrollment API call
      const response = await handleEnrollment(user_id, course_id);
      console.log('Enrollment Response:', response);
  
    } catch (error) {
      console.error('Error enrolling in course:', error);
      alert('Failed to enroll in course');
    }
  };
  
  
  const filteredCourses = courses.filter(course =>
    (selectedDifficulty === '' || course.difficultyLevel === selectedDifficulty) &&
    (selectedCategory === '' || course.category === selectedCategory) &&
    (selectedTitle === '' || course.title === selectedTitle)
  );
  
  const difficultyLevels = [...new Set(courses.map(course => course.difficultyLevel))];
  const categories = [...new Set(courses.map(course => course.category))];
  const titles = [...new Set(courses.map(course => course.title))];
  
  return (
    <div className="flex justify-center items-center min-h-screen p-8">
      <div className="p-8 w-full max-w-4xl">
        <h2 className="text-3xl font-bold dark:text-white mb-4 text-center">Filter Courses</h2>
        <div className="border-b-4 border-blue-600 mb-16 mx-auto w-20"></div>
        
        <div className="mb-16">
          <div className="flex flex-wrap gap-16 justify-between mb-4">
            <div className="flex-1">
              <label htmlFor="difficulty" className="font-semibold">Difficulty Level</label>
              <select
                id="difficulty"
                value={selectedDifficulty}
                onChange={handleDifficultyChange}
                className="w-full p-3 border border-blue-300 rounded-lg bg-slate-300/10 focus:outline-none focus:ring-2"
              >
                <option value="">All Difficulty Levels</option>
                {difficultyLevels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>

            <div className="flex-1">
              <label htmlFor="category" className="font-semibold">Category</label>
              <select
                id="category"
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="w-full p-3 border border-blue-300 rounded-lg bg-slate-300/10 focus:outline-none focus:ring-2"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div className="flex-1">
              <label htmlFor="title" className="font-semibold">Title</label>
              <select
                id="title"
                value={selectedTitle}
                onChange={handleTitleChange}
                className="w-full p-3 border border-blue-300 rounded-lg bg-slate-300/10 focus:outline-none focus:ring-2"
              >
                <option value="">All Titles</option>
                {titles.map(title => (
                  <option key={title} value={title}>{title}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-32 justify-center">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div
                key={course.id}
                className="p-6 border border-blue-400 rounded-lg shadow-md w-full md:w-[320px] bg-white"
              >
                <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
                <p className="dark:text-white mb-2">Category: {course.category}</p>
                <p className="dark:text-white mb-2">Difficulty Level: {course.difficultyLevel}</p>
                <p className="dark:text-white mb-2">Syllabus: {course.syllabus}</p>
                <p className="dark:text-white mb-2">Schedule: {course.schedule}</p>
                <p className="dark:text-white mb-4">Prerequisites: {course.prerequisites}</p>

                <Button
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  onClick={() => handleEnrollClick(course.id)} // Pass course.id here
                >
                  Enroll as Instructor
                </Button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No courses found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TutorCourses;
