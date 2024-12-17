import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Power } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { logout } from '@/services/Api';

const UserLeftbar = () => {
  const navigate = useNavigate();
  const UserLinks = [
    { title: 'Dashboard', link: '/user/dashboard' },
    { title: 'Courses', link: '/user/courses' },
  ];

  const handleClick = async () => {
    const response=await logout()
    navigate('/');
  };

  return (
    <div className="h-[92vh] w-1/6 flex flex-col shadow-sm shadow-primary fixed top-[8vh] left-0 light:bg-white z-0">
      <div className="h-[90%] flex flex-col justify-start items-center  p-8 gap-16">
        {UserLinks.map((data, index) => (
          <NavLink
            key={index}
            to={data.link}
            className="p-4 border-l-4 border-blue-400 hover:bg-primary/10 text-base  w-[220px] flex items-center justify-center rounded-sm"
          >
            {data.title}
          </NavLink>
        ))}
      </div>
      <div className="h-[5%] w-full flex flex-col justify-center items-center">
        <Button
          onClick={handleClick}
          className="border-l-4 border-red-600 p-5 bg-red-500/5 hover:bg-red-500/10 font-bold text-sm w-[220px]"
        >
          <span className="flex flex-row items-center justify-center gap-2 text-red-500">
            <Power size={20} /> Logout
          </span>
        </Button>
      </div>
    </div>
  );
};

export default UserLeftbar;
