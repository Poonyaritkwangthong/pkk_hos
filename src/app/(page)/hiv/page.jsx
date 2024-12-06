"use client";
import React from 'react'
import SideBar from '../../components/sidebar';
import HIV from '../../components/hiv';

export default function page() {
  return (
    <div>
      <div className="bg-[#f5f5f9] w-screen h-full p-4">
      <SideBar/>
      <HIV/>
      </div>
    </div>
  )
}
