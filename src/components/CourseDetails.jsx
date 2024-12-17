import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '@/services/Api'; // Adjust path as necessary

const CourseDetails = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await axiosInstance.get(`/courses/${courseId}`);
        setCourse(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch course details');
        setLoading(false);
      }
    };

    fetchCourseDetails();
  }, [courseId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="pt-[2vh] pl-[16.6667%] w-full min-h-screen">
      <div className="max-w-7xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">{course.title}</h1>
        <p className="text-lg mb-4">{course.description}</p>
        <h2 className="text-2xl font-semibold mb-4">Learning Materials</h2>
        <ul className="list-disc pl-6">
          {course.materials && course.materials.length > 0 ? (
            course.materials.map((material) => (
              <li key={material.id} className="mb-2">
                <a
                  href={material.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {material.title}
                </a>
              </li>
            ))
          ) : (
            <p>No learning materials available</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default CourseDetails;
