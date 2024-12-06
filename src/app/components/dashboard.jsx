import React, { useState } from "react";
import { AiOutlineMore } from "react-icons/ai";
import LineChart from "./line-chart";
import BarChart from "./bar-chart";

export default function Dashboard() {
  //button dropdown
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
  const [isDropdownOpen4, setIsDropdownOpen4] = useState(false);

  const toggleDropdown1 = () => {
    setIsDropdownOpen1(!isDropdownOpen1);
  };

  const closeDropdown1 = () => {
    setIsDropdownOpen1(false);
  };
  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
  };

  const closeDropdown2 = () => {
    setIsDropdownOpen2(false);
  };
  const toggleDropdown3 = () => {
    setIsDropdownOpen3(!isDropdownOpen3);
  };

  const closeDropdown3 = () => {
    setIsDropdownOpen3(false);
  };
  const toggleDropdown4 = () => {
    setIsDropdownOpen4(!isDropdownOpen4);
  };

  const closeDropdown4 = () => {
    setIsDropdownOpen4(false);
  };
  
  //button dropdown
  return (
    <div>
      <div className="p-2  sm:ml-[18rem]">
        <div className="flex justify-center gap-[2rem]">
          {/*box 1*/}
          <div>
            {/*box 1.1*/}
            <div className="w-[60rem] h-[15rem] border shadow-xl rounded-xl bg-white mb-8 p-[2rem]">
              <div className="flex gap-[5rem]">
                <div className="w-[36rem]">
                  <h1 className="text-[#d60092] text-2xl mb-6">
                    ผู้ใช้งานระบบ
                  </h1>
                  <a
                    href=""
                    className="p-2 border-[#d60092] border text-[#d60092] rounded-lg text-sm hover:bg-[#d60092] hover:text-white "
                  >
                    View Badges
                  </a>
                  <p className="text-[#8492a2] text-xl mt-6">
                    ระบบเชื่อมต่อข้อมูลระหว่าง HIS และระบบบันทึกข้อมูล PPKHOS
                    LAB API API
                  </p>
                </div>
                <img
                  className="w-[12rem] mt-[3.1rem]"
                  src="/images/man.png"
                  alt=""
                />
              </div>
            </div>
            {/*box 1.2*/}
            <div className="w-[60rem] h-[30rem] border shadow-xl rounded-xl bg-white p-[2rem]">
              <h1 className="text-[#8492a2] text-2xl ">
                เชื่อมต่อข้อมูลระหว่าง HIS และระบบบันทึกข้อมูล PPKHOS LAB API
              </h1>
              {/*Chart.js 1*/}
              <div className="w-[50rem] mx-auto">
                <BarChart/>
              </div>
            </div>
          </div>
          {/*box 2*/}
          <div>
            {/*box 2.1*/}
            <div className="w-[34rem]">
              <div className="grid grid-cols-2 gap-[2rem] mb-[2rem]">
                {/*box 2.1.1*/}
                <div className="w-[16rem] h-[14rem] border shadow-xl rounded-xl bg-white p-[2rem]">
                  <div className="flex gap-[7rem] items-center">
                    <img className="w-[3rem]" src="/images/chart-success.png" alt="" />
                    <button className=" text-gray-500 font-bold p-1 rounded-md text-3xl"
                     onClick={toggleDropdown1}>
                      <AiOutlineMore />
                    </button>
                     {isDropdownOpen1 && (
              <div
                className="absolute right-0 z-50 my-4 text-base list-none bg-white divide-y divide-gray-300 rounded-lg shadow-2xl p-4 w-[18rem]"
                id="user-dropdown"
              >
                <div className="flex gap-2 items-center px-4">
        
                  <div className="px-2 py-4">
                   
                    
                  </div>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <a
                      href="/my-profile"
                      className="px-4 py-2 text-l text-[#707c8a] flex gap-2 items-center mt-2 hover:bg-[#ffbae9] hover:text-[#d60092] rounded-lg"
                    >
                      <div className="text-xl">
                    
                      </div>
                      <p>My Profile</p>
                    </a>
                  </li>

                  <li className="border-gray-300 border-b">
                    <a
                      href="#"
                      className="px-4 py-2 text-l text-[#707c8a] flex gap-2 items-center mb-4 hover:bg-[#ffbae9] hover:text-[#d60092] rounded-lg"
                    >
                      <div className="text-xl">
               
                      </div>
                      <p>Settings</p>
                    </a>
                  </li>

                  <li className="mt-2">
                    <a
                      href="#"
                      className="px-4 py-2 text-l text-[#707c8a] flex gap-2 items-center hover:bg-[#ffbae9] hover:text-[#d60092] rounded-lg"
                    >
                      <div className="text-xl">
               
                      </div>
                      <p>Logout</p>
                    </a>
                  </li>
                </ul>
              </div>
            )}
                  </div>
                  <div className="mt-4">
                    <h1 className="text-gray-400 text-xl">จำนวนผู้ป่วย</h1>
                    <h2 className="text-gray-500 text-xl mt-2 font-bold">รอประมวลผล</h2>
                  </div>
                </div>
                {/*box 2.1.2*/}
                <div className="w-[16rem] h-[14rem] border shadow-xl rounded-xl bg-white p-[2rem]">
                  <div className="flex gap-[7rem] items-center">
                    <img className="w-[3rem]" src="/images/wallet.png" alt="" />
                    <button className=" text-gray-500 font-bold p-1 rounded-md text-3xl"
                     onClick={toggleDropdown2}>
                      <AiOutlineMore />
                    </button>
                     {isDropdownOpen2 && (
              <div
                className="absolute right-0 z-50 my-4 text-base list-none bg-white divide-y divide-gray-300 rounded-lg shadow-2xl p-4 w-[18rem]"
                id="user-dropdown"
              >
                <div className="flex gap-2 items-center px-4">
                  
                  <div className="px-2 py-4">
                   
                  </div>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <a
                      href="/my-profile"
                      className="px-4 py-2 text-l text-[#707c8a] flex gap-2 items-center mt-2 hover:bg-[#ffbae9] hover:text-[#d60092] rounded-lg"
                    >
                      <div className="text-xl">
                  
                      </div>
                      <p>My Profile</p>
                    </a>
                  </li>

                  <li className="border-gray-300 border-b">
                    <a
                      href="#"
                      className="px-4 py-2 text-l text-[#707c8a] flex gap-2 items-center mb-4 hover:bg-[#ffbae9] hover:text-[#d60092] rounded-lg"
                    >
                      <div className="text-xl">
                   
                      </div>
                      <p>Settings</p>
                    </a>
                  </li>

                  <li className="mt-2">
                    <a
                      href="#"
                      className="px-4 py-2 text-l text-[#707c8a] flex gap-2 items-center hover:bg-[#ffbae9] hover:text-[#d60092] rounded-lg"
                    >
                      <div className="text-xl">
                    
                      </div>
                      <p>Logout</p>
                    </a>
                  </li>
                </ul>
              </div>
            )}
                  </div>
                  <div className="mt-4">
                    <h1 className="text-gray-400 text-xl">จำนวนผู้ป่วย</h1>
                    <h2 className="text-gray-500 text-xl mt-2 font-bold">รอประมวลผล</h2>
                  </div>
                </div>
                {/*box 2.1.3*/}
                <div className="w-[16rem] h-[14rem] border shadow-xl rounded-xl bg-white p-[2rem]">
                  <div className="flex gap-[7rem] items-center">
                    <img className="w-[3rem]" src="/images/paypal.png" alt="" />
                    <button className=" text-gray-500 font-bold p-1 rounded-md text-3xl"
                     onClick={toggleDropdown3}>
                      <AiOutlineMore />
                    </button>
                     {isDropdownOpen3 && (
              <div
                className="absolute right-0 z-50 my-4 text-base list-none bg-white divide-y divide-gray-300 rounded-lg shadow-2xl p-4 w-[18rem]"
                id="user-dropdown"
              >
                <div className="flex gap-2 items-center px-4">
                  
                  <div className="px-2 py-4">
                    
                  </div>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <a
                      href="/my-profile"
                      className="px-4 py-2 text-l text-[#707c8a] flex gap-2 items-center mt-2 hover:bg-[#ffbae9] hover:text-[#d60092] rounded-lg"
                    >
                      <div className="text-xl">
            
                      </div>
                      <p>My Profile</p>
                    </a>
                  </li>

                  <li className="border-gray-300 border-b">
                    <a
                      href="#"
                      className="px-4 py-2 text-l text-[#707c8a] flex gap-2 items-center mb-4 hover:bg-[#ffbae9] hover:text-[#d60092] rounded-lg"
                    >
                      <div className="text-xl">
                  
                      </div>
                      <p>Settings</p>
                    </a>
                  </li>

                  <li className="mt-2">
                    <a
                      href="#"
                      className="px-4 py-2 text-l text-[#707c8a] flex gap-2 items-center hover:bg-[#ffbae9] hover:text-[#d60092] rounded-lg"
                    >
                      <div className="text-xl">
                 
                      </div>
                      <p>Logout</p>
                    </a>
                  </li>
                </ul>
              </div>
            )}
                  </div>
                  <div className="mt-4">
                    <h1 className="text-gray-400 text-xl">Total Negative</h1>
                    <h2 className="text-gray-500 text-xl mt-2 font-bold">รอประมวลผล</h2>
                  </div>
                </div>
                {/*box 2.1.4*/}
                <div className="w-[16rem] h-[14rem] border shadow-xl rounded-xl bg-white p-[2rem]">
                  <div className="flex gap-[7rem] items-center">
                    <img className="w-[3rem]" src="/images/cc-primary.png" alt="" />
                    <button className=" text-gray-500 font-bold p-1 rounded-md text-3xl"
                     onClick={toggleDropdown4}>
                      <AiOutlineMore />
                    </button>
                     {isDropdownOpen4 && (
              <div
                className="absolute right-0 z-50 my-4 text-base list-none bg-white divide-y divide-gray-300 rounded-lg shadow-2xl p-4 w-[10rem]"
                id="user-dropdown"
              >
                <div className="flex gap-2 items-center px-4">
                 
                  <div className="px-2 py-4">
                    
                  </div>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <a
                      href="/my-profile"
                      className="px-4 py-2 text-l text-[#707c8a] flex gap-2 items-center mt-2 hover:bg-[#ffbae9] hover:text-[#d60092] rounded-lg"
                    >
                      <div className="text-xl">
              
                      </div>
                      <p>My Profile</p>
                    </a>
                  </li>

                  <li className="border-gray-300 border-b">
                    <a
                      href="#"
                      className="px-4 py-2 text-l text-[#707c8a] flex gap-2 items-center mb-4 hover:bg-[#ffbae9] hover:text-[#d60092] rounded-lg"
                    >
                      <div className="text-xl">
          
                      </div>
                      <p>Settings</p>
                    </a>
                  </li>

                  <li className="mt-2">
                    <a
                      href="#"
                      className="px-4 py-2 text-l text-[#707c8a] flex gap-2 items-center hover:bg-[#ffbae9] hover:text-[#d60092] rounded-lg"
                    >
                      <div className="text-xl">
               
                      </div>
                      <p>Logout</p>
                    </a>
                  </li>
                </ul>
              </div>
            )}
                  </div>
                  <div className="mt-4">
                    <h1 className="text-gray-400 text-xl">Total Positive</h1>
                    <h2 className="text-gray-500 text-xl mt-2 font-bold">รอประมวลผล</h2>
                  </div>
                </div>
              </div>
            </div>
            {/*box 2.2*/}
            <div className="w-[34rem] h-[14rem] border shadow-xl rounded-xl bg-white p-[2rem]">
              <div className="flex items-center gap-[1rem]">
                <div className="">
                  <h1 className="text-gray-400 text-2xl">Profile Report</h1>
                  <div className="text-[#fcba29] p-2 bg-[#fff2d6] text-sm w-[6rem] rounded-xl mt-4">
                  <p >รอประมวลผล</p>
                  </div>
                  
                  <p className="text-[#7ddf46] font-bold mt-4">รอประมวลผล</p>
                  <h2 className="text-gray-500 text-2xl mt-2">รอประมวลผล</h2>
                </div>
                <div className="w-[18rem]">
                  <LineChart/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[96rem] mx-auto p-4">
          <div className="flex justify-between mt-[6rem]">
            <div className="flex gap-1">
              <p className="text-gray-500">@Phrapokklao Hospital,</p>
              <a className="text-[#d60092] hover:text-[#20a68a]" href="">
                ติดต่อสอบถาม
              </a>
            </div>
            <div className="flex gap-4">
              <a className="text-[#d60092] hover:text-[#20a68a]" href="">
                คู่มือเเละเอกสาร
              </a>
              <a className="text-[#d60092] hover:text-[#20a68a]" href="">
                เเจ้งปัญหา
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
