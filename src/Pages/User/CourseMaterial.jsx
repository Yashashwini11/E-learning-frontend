import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getmaterial } from '@/services/Api'; // Adjust the import path as needed

const CourseMaterial = () => {
  const { courseid } = useParams(); // Extract courseid from URL parameters
  const [materials, setMaterials] = useState([]);
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchCourseMaterials = async () => {
      try {
        console.log('Fetching materials for course ID:', courseid);
        if (!courseid) {
          throw new Error('Course ID is not available');
        }

        const response = await getmaterial(courseid);
        console.log('API Response:', response.data); // Log the response data

        if (Array.isArray(response.data)) {
          setMaterials(response.data); // Set the list of materials
        } else {
          console.error('Unexpected response data format:', response.data);
          setError('Unexpected response format.');
        }
      } catch (error) {
        console.error('Error fetching course materials:', error);
        setError('Failed to fetch course materials.'); // Set error message for display
      }
    };

    fetchCourseMaterials();
  }, [courseid]);

  return (
    <div className='ml-64 mt-16 p-4 bg-gray-50 min-h-screen'>
      <h1 className='text-2xl font-bold text-blue-700'>Course Materials</h1>
      <div className='mt-4'>
        {error && <p className='text-red-500'>{error}</p>} {/* Display error if exists */}
        {materials.length > 0 ? (
          <table className='min-w-full divide-y divide-gray-200'>
            <thead className='bg-gray-50'>
              <tr>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Title</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Type</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Link</th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-200'>
              {materials.map((material) => (
                <tr key={material.courseId}>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                    {material.title}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    {material.type}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    <a href={material.url} target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline'>
                      View Material
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          !error && <p>No materials available for this course.</p> // Display if no materials and no error
        )}
      </div>
    </div>
  );
};

export default CourseMaterial;
