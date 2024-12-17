import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { ModeToggle } from '../mode-toggle';

const Topbar = () => {
  return (
    <div className="h-[8vh] w-full flex justify-between items-center shadow-sm shadow-primary fixed top-0 left-0 right-0 bg-white z-10 px-4">
      <div className="text-lg font-bold">Admin Dashboard</div>
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>MM</AvatarFallback>
        </Avatar>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Topbar;
