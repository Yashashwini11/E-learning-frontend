import React from 'react'
import { Outlet } from 'react-router-dom'
import UserLeftbar from '@/Pages/User/UserLeftbar'
import UserTopbar from '@/Pages/User/UserTopbar'

const UserLayout = () => {
    return (
        <div className='h-screen w-screen flex overflow-hidden'>
            <UserLeftbar />
            <div className='flex flex-col flex-1'>
                <UserTopbar />
                <div className='flex-1 overflow-y-auto overflow-x-hidden mt-[8vh]'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default UserLayout
