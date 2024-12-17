// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homelayout from './components/Layouts/Homelayout';
import Login from './Pages/User/Login';
import AdminLayout from './components/Layouts/AdminLayout';
import AdminCourses from './components/Admin/AdminCourses';
import AdminManageUser from './components/Admin/AdminManageUser';
import AvailableCourses from './Pages/User/AvailableCourses';
import UserLayout from './components/Layouts/UserLayout';
import UserDashboard from './Pages/User/UserDashboard';
import Syllabus from './Pages/User/Syllabus';
import Enrollment from './components/Admin/Enrollment';
import TutorLayout from './components/Layouts/TutorLayout';
import TutorDashboard from './components/Tutor/TutorDashboard';
import TutorManageCourses from './Pages/Tutor/TutorManageCourses';
import LearningMaterial from './Pages/User/LearningMaterial';
import TutorLearningMaterial from './Pages/Tutor/TutorLearningMaterial';
import TutorCourses from './Pages/Tutor/TutorCourses';
import CourseMaterial from './Pages/User/CourseMaterial';

const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Homelayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/courses" element={<AvailableCourses />} />
        </Route>
        <Route element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<AdminCourses />} />
          <Route path="/admin/users" element={<AdminManageUser />} />
          <Route path="/admin/enrollment" element={<Enrollment />} />
        </Route>
        <Route element={<UserLayout />}>
          <Route path="/user/dashboard" element={<UserDashboard />} />
          <Route path="/user/courses" element={<AvailableCourses />} />
          <Route path="/user/syllabus/:id" element={<Syllabus />} />     
          <Route path="/course/:courseid" element={<CourseMaterial />} />
        </Route>
        <Route element={<TutorLayout />}>
          <Route path="/tutor/dashboard" element={<TutorDashboard />} />
          <Route path="/tutor/courses" element={<TutorManageCourses />} />
          <Route path="/tutor/search" element={<TutorCourses />} />
          <Route path="/tutor/material" element={<TutorLearningMaterial />} />
          <Route path="/tutor/course/:courseid" element={<CourseMaterial />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
