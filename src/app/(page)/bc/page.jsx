"use client";
import React from 'react'
import SideBar from '@/app/components/sidebar';
import BC from '@/app/components/bc';

export default function page() {
  return (
    <div className="bg-[#f5f5f9] w-screen h-screen p-4">
      <SideBar/>
      <BC/>
    </div>
  )
}
