import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const mockData = {
  '1': {
    courseName: 'Introduction to Machine Learning',
    modules: [
      { id: 1, title: 'Introduction to Machine Learning', type: 'PDF', url: '/path/to/introduction.pdf', videoUrl: 'https://www.example.com/video1' },
      { id: 2, title: 'Module 1: Supervised Learning', type: 'PDF', url: '/path/to/module1.pdf', videoUrl: 'https://www.example.com/video2' },
      { id: 3, title: 'Module 2: Unsupervised Learning', type: 'PDF', url: '/path/to/module2.pdf', videoUrl: 'https://www.example.com/video3' },
      { id: 4, title: 'Module 3: Neural Networks', type: 'PDF', url: '/path/to/module3.pdf', videoUrl: 'https://www.example.com/video4' },
      { id: 5, title: 'Conclusion and Future Directions', type: 'PDF', url: '/path/to/conclusion.pdf', videoUrl: 'https://www.example.com/video5' },
    ],
    assignments: [
      { id: 1, title: 'Assignment 1', pdfLink: '/path/to/assignment1.pdf' },
      { id: 2, title: 'Assignment 2', pdfLink: '/path/to/assignment2.pdf' },
    ],
    exams: [
      { id: 1, title: 'Midterm Exam', pdfLink: '/path/to/midterm_exam.pdf' },
      { id: 2, title: 'Final Exam', pdfLink: '/path/to/final_exam.pdf' },
    ],
  },
  // Add other courses as needed
};

const Syllabus = () => {
  const { id } = useParams();
  const courseData = mockData[id] || {};
  const { courseName, modules, assignments, exams } = courseData;

  const [moduleProgress, setModuleProgress] = useState({});

  const handleModuleAction = (moduleId, action) => {
    setModuleProgress(prev => ({
      ...prev,
      [moduleId]: {
        ...prev[moduleId],
        [action]: true,
      },
    }));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-100">
      <div className="p-10 max-w-4xl w-full">

        {/* Modules Section */}
        <div className="mb-8">
          <h3 className="text-3xl font-bold mb-4 text-center text-gray-800">Course Modules</h3>
          <ul className="space-y-6">
            {modules?.map((module) => {
              const isCompleted = moduleProgress[module.id]?.pdf && moduleProgress[module.id]?.video;

              return (
                <li key={module.id} className={`flex flex-col md:flex-row items-center ${isCompleted ? 'bg-green-50' : 'bg-blue-50'} p-6 rounded-md shadow-md`}>
                  <div className="flex-grow mb-4 md:mb-0">
                    <span className="text-xl font-medium text-blue-700">{module.title}</span>
                  </div>
                  <div className="flex items-center">
                    <a href={module.url} className="text-blue-500 hover:text-blue-700 font-semibold mr-4" download onClick={() => handleModuleAction(module.id, 'pdf')}>
                      Download {module.type}
                    </a>
                    <a href={module.videoUrl} className="text-blue-500 hover:text-blue-700 font-semibold" onClick={() => handleModuleAction(module.id, 'video')} target="_blank" rel="noopener noreferrer">
                      Watch Video
                    </a>
                  </div>
                  <div className="ml-4">
                    {isCompleted ? (
                      <div className="w-6 h-6 rounded-full bg-blue-500" title="Completed"></div>
                    ) : (
                      <div className="w-6 h-6 rounded-full border border-gray-400" title="Incomplete"></div>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Assignments Section */}
        <div className="mb-8  pt-8">
          <h3 className="text-3xl font-bold mb-4 text-center text-gray-800">Assignments</h3>
          <ul className="space-y-4">
            {assignments?.map((assignment) => (
              <li key={assignment.id} className="flex flex-col md:flex-row items-center bg-blue-50 p-6 rounded-md shadow-md">
                <div className="flex-grow mb-4 md:mb-0">
                  <span className="text-xl font-medium text-blue-700">{assignment.title}</span>
                </div>
                <a href={assignment.pdfLink} className="text-blue-500 hover:text-blue-700 font-semibold" download>
                  Download PDF
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Exams Section */}
        <div className="mb-8  pt-8">
          <h3 className="text-3xl font-bold mb-4 text-center text-gray-800">Exams</h3>
          <ul className="space-y-4">
            {exams?.map((exam) => (
              <li key={exam.id} className="flex flex-col md:flex-row items-center bg-blue-50 p-6 rounded-md shadow-md">
                <div className="flex-grow mb-4 md:mb-0">
                  <span className="text-xl font-medium text-blue-700">{exam.title}</span>
                </div>
                <a href={exam.pdfLink} className="text-blue-500 hover:text-blue-700 font-semibold" download>
                  Take Test
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Syllabus;
