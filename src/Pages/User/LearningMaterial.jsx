import React from 'react';

// Static data for learning materials
const learningMaterials = [
  {
    id: 1,
    title: 'Introduction to React',
    type: 'Video',
    url: 'https://www.youtube.com',
  },
  {
    id: 2,
    title: 'Advanced JavaScript',
    type: 'Article',
    url: 'https://example.com/advanced-js',
  },
  {
    id: 3,
    title: 'CSS Grid Layout',
    type: 'Tutorial',
    url: 'https://example.com/css-grid',
  },
];

// Static data for assignments
const assignments = [
  {
    id: 1,
    title: 'React Basics Assignment',
    dueDate: '2024-08-15',
    url: 'https://example.com/assignment/react-basics',
  },
  {
    id: 2,
    title: 'JavaScript Quiz',
    dueDate: '2024-08-20',
    url: 'https://example.com/assignment/js-quiz',
  },
];

// Static data for exams
const exams = [
  {
    id: 1,
    title: 'Front-end Development Exam',
    date: '2024-08-25',
    url: 'https://example.com/exam/front-end',
  },
  {
    id: 2,
    title: 'JavaScript Advanced Exam',
    date: '2024-08-30',
    url: 'https://example.com/exam/js-advanced',
  },
];

const LearningMaterial = () => {
  return (
    <div className="flex-1 ml-64 mt-8 p-8 min-h-screen">
      <div >
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Learning Materials</h2>
        <ul className="space-y-4">
          {learningMaterials.map((material) => (
            <li key={material.id} className="p-4 border-l-4 border-blue-500 bg-white rounded-md shadow-md">
              <h3 className="text-xl font-semibold text-blue-700">{material.title}</h3>
              <p className="text-gray-600">{material.type}</p>
              <a
                href={material.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2 block"
              >
                View Material
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className=" mt-16 mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Assignments</h2>
        <ul className="space-y-8">
          {assignments.map((assignment) => (
            <li key={assignment.id} className="p-4 border-l-4 border-blue-500 bg-white rounded-md shadow-md">
              <h3 className="text-xl font-semibold text-blue-700">{assignment.title}</h3>
              <p className="text-gray-600">Due Date: {assignment.dueDate}</p>
              <a
                href={assignment.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2 block"
              >
                View Assignment
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Exams Section */}
      <div className="mt-16  mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Exams</h2>
        <ul className="space-y-4">
          {exams.map((exam) => (
            <li key={exam.id} className="p-4 border-l-4 border-blue-500 bg-white rounded-md shadow-md">
              <h3 className="text-xl font-semibold text-blue-700">{exam.title}</h3>
              <p className="text-gray-600">Date: {exam.date}</p>
              <a
                href={exam.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2 block"
              >
                View Exam
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LearningMaterial;
