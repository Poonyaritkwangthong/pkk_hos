"use client";
import React from 'react'
import SideBar from '../../components/sidebar';
import Dashboard from '../../components/dashboard';

export default function page() {
  return (
    <div className="bg-[#f5f5f9] w-screen h-screen p-4">
      <SideBar/>
      <Dashboard/>
    </div>
  )
}
