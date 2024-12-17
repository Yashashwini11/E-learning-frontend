import React from 'react'
import { Outlet } from 'react-router-dom'
import TutorLeftBar from '../Tutor/TutorLeftBar'
import TutorTopBar from '../Tutor/TutorTopBar'


const TutorLayout = () => {
    return (
        <div className='h-screen w-screen flex overflow-hidden'>
            <TutorLeftBar />
            <div className='flex flex-col flex-1'>
                <TutorTopBar />
                <div className='flex-1 overflow-y-auto overflow-x-hidden mt-[8vh]'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default TutorLayout
