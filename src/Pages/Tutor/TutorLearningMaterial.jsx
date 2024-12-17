import React, { useState, useEffect } from 'react';
import { addLearningMaterial, getallmaterial, getCourses } from '@/services/Api';

const TutorLearningMaterial = () => {
  const [selectedCourseId, setSelectedCourseId] = useState('');
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [url, setUrl] = useState('');
  const [message, setMessage] = useState(null);
  const [materials, setMaterials] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchMaterials();
    fetchCourses();
  }, []);

  const fetchMaterials = async () => {
    try {
      const response = await getallmaterial();
      setMaterials(response.data);
    } catch (err) {
      console.error('Failed to fetch materials:', err);
    }
  };

  const fetchCourses = async () => {
    try {
      const response = await getCourses();
      console.log(response.data)
      setCourses(response.data);
    } catch (err) {
      console.error('Failed to fetch courses:', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addLearningMaterial(selectedCourseId, title, type, url);
      setMessage('Learning material added successfully!');
      fetchMaterials(); // Refresh materials
      setSelectedCourseId('');
      setTitle('');
      setType('');
      setUrl('');
    } catch (error) {
      console.error('Failed to add learning material:', error.response ? error.response.data : error.message);
      setMessage('Failed to add learning material.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow">
        {/* Sidebar will be here */}

        <main className="flex-1 p-6 ">
          {/* Table Section */}
          <div className="w-full max-w-4xl mx-auto mb-12  p-6">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4 text-center">All Learning Materials</h3>
            {materials.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="  divide-y divide-gray-200">
                  <thead className=" ">
                    <tr>
                      <th className="px-14 py-10 text-left text-sm font-semibold text-gray-700 ">Course ID</th>
                      <th className="px-14 py-8  text-left text-sm font-semibold text-gray-700 ">Title</th>
                      <th className="px-14 py-8 text-left text-sm font-semibold text-gray-700 ">Type</th>
                      <th className="px-14 py-8 text-left text-sm font-semibold text-gray-700  ">URL</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {materials.map((material) => (
                      <tr key={material.id}>
                        <td className="px-14 py-8 text-sm text-gray-900  ">{material.courseId}</td>
                        <td className="px-14 py-8 text-sm text-gray-900  ">{material.title}</td>
                        <td className="px-14 py-8 text-sm text-gray-900  ">{material.type}</td>
                        <td className="px-14 py-8 text-sm text-gray-900  ">
                          <a href={material.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            {material.url}
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-center text-gray-500">No learning materials available.</p>
            )}
          </div>

          {/* Form Section */}
          <div className="w-full max-w-4xl mx-auto p-6">
            <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Add Learning Material</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Course</label>
                <select
                  value={selectedCourseId}
                  onChange={(e) => setSelectedCourseId(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
                  required
                >
                  <option value="" className=" text-gray-700">Select a course</option>
                  {courses.map((course) => (
                    <option key={course.id} value={course.id} className= "text-gray-900">
                      {course.title}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter material title"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                <input
                  type="text"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., Video, Article"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">URL</label>
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter material URL"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition-colors"
              >
                Add Material
              </button>
            </form>

            {message && (
              <p className={`mt-6 text-center font-semibold ${message.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                {message}
              </p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default TutorLearningMaterial;
