"use client";
import React from 'react'
import SideBar from '../../components/sidebar';
import ResultHivPcr from '../../components/result-hiv-pcr';

export default function page() {
  return (
    <div>
      <div className="bg-[#f5f5f9] w-screen h-screen p-4">
      <SideBar/>
      <ResultHivPcr/>
      </div>
    </div>
  )
}