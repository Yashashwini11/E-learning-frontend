import React from 'react'
import { Outlet } from 'react-router-dom'
import Leftbar from '../Admin/AdminLeftbar'
import Topbar from '../Admin/AdminTopbar'

const AdminLayout = () => {
    return (
        <div className='h-screen w-screen flex overflow-hidden'>
            <Leftbar />
            <div className='flex flex-col flex-1'>
                <Topbar />
                <div className='flex-1 overflow-y-auto overflow-x-hidden mt-[8vh]'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default AdminLayout
