"use client";
import React from 'react'
import SideBar from '../../components/sidebar';
import ResultBc from '../../components/result-bc';

export default function page() {
  return (
    <div>
      <div className="bg-[#f5f5f9] w-screen h-screen p-4">
      <SideBar/>
      <ResultBc/>
      </div>
    </div>
  )
}
