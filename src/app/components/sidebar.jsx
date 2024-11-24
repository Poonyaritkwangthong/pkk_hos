
import React from "react";
import { BiHomeCircle } from "react-icons/bi";
import { GoPeople } from "react-icons/go";
import { MdPlaylistAdd } from "react-icons/md";
import { FiAperture, FiCrosshair } from "react-icons/fi";
import { MdListAlt } from "react-icons/md";
import { IoIosAlbums } from "react-icons/io";

export default function SideBar() {
  return (
    <div >
      <aside
        className="w-[17.5rem]   text-gray-500 fixed top-0 left-0 z-40 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-white">
          <div className="flex gap-2 items-center p-4 mb-2">
            <img className=" w-1/5" src="/images/85.png" alt="" />
            <h1 className="text-2xl font-bold">PPKHOS</h1>
          </div>
          <div>
            <ul>
              <li>
                <a href="/dashboard">
                  <div className="text-[#d60092] bg-[#ffbae9] p-3 rounded-lg flex gap-2 mb-5 hover:bg-[#ffd9f3]">
                    <h1 className="text-[1.3rem] pl-2">
                      <BiHomeCircle />
                    </h1>
                    <span className="font-bold">Dashboard</span>
                  </div>
                </a>
              </li>
              <div className="mb-5">
                <h1 className="text-[0.8rem] text-[#d60092] font-bold pl-[1.3rem]">
                  LAB REQUEST
                </h1>
              </div>
              <li>
                <a href="/hiv">
                  <div className="flex gap-2 p-2 rounded-lg hover:bg-[#ffbae9] hover:text-[#d60092] text-[#707c8a]">
                    <h1 className="text-[1.2rem] pl-2">
                      <GoPeople />
                    </h1>
                    <span className="">ส่งผลตรวจ HIV</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="bc">
                  <div className="flex gap-2 p-2 rounded-lg  hover:bg-[#ffbae9] hover:text-[#d60092] text-[#707c8a] mb-5">
                    <h1 className="text-[1.4rem] pl-2">
                      <MdPlaylistAdd />
                    </h1>
                    <span className="">ส่งผลตรวจ BC</span>
                  </div>
                </a>
              </li>
              <div className="mb-5">
                <h1 className="text-[0.8rem] text-[#d60092] font-bold pl-[1.3rem]">
                  LAB RESULT
                </h1>
              </div>
              <li>
                <a href="result_hiv/pcr">
                  <div className="flex gap-2 p-2 rounded-lg  hover:bg-[#ffbae9] hover:text-[#d60092] text-[#707c8a]">
                    <h1 className="text-[1.2rem] pl-[0.4rem]">
                      <FiAperture />
                    </h1>
                    <span className="">ผล HIV/PCR</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="result_bc">
                  <div className="flex gap-2 p-2 rounded-lg  hover:bg-[#ffbae9] hover:text-[#d60092] text-[#707c8a]">
                    <h1 className="text-[1.2rem] pl-[0.4rem]">
                      <FiCrosshair />
                    </h1>
                    <span className="">ผล BC</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="result_cd4">
                  <div className="flex gap-2 p-2 rounded-lg  hover:bg-[#ffbae9] hover:text-[#d60092] text-[#707c8a]">
                    <h1 className="text-[1.2rem] pl-[0.4rem]">
                      <IoIosAlbums />
                    </h1>
                    <span className="">ผล CD4</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="result_vl">
                  <div className="flex gap-2 p-2 rounded-lg  hover:bg-[#ffbae9] hover:text-[#d60092] text-[#707c8a]">
                    <h1 className="text-[1.2rem] pl-[0.4rem]">
                      <MdListAlt />
                    </h1>
                    <span className="">ผล VL</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
}
