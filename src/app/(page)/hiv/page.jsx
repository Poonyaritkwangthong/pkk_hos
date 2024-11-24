"use client";
import React from 'react'
import SideBar from '@/app/components/sidebar';
import HIV from '@/app/components/hiv';

export default function page() {
  return (
    <div>
      <div className="bg-[#f5f5f9] w-screen h-screen p-4">
      <SideBar/>
      <HIV/>
      </div>
    </div>
  )
}
