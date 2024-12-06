"use client";
import React from 'react'
import SideBar from '../../components/sidebar';
import BC from '../../components/bc';

export default function page() {
  return (
    <div className="bg-[#f5f5f9] w-screen h-full p-4">
      <SideBar/>
      <BC/>
    </div>
  )
}
