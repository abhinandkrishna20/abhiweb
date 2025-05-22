import React from 'react'

import { Outlet } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div className='flex flex-col rounded-b-xs min-h-screen bg-white dark:bg-gray-800'>
        <Header />
        <main className='flex-grow m-2 h-full p-2'>
            <Outlet />
        </main>
    <Footer />
    </div>
  )
}

export default MainLayout