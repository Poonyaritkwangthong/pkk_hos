import React, { useState } from "react";
import { VscAccount, VscGear } from "react-icons/vsc";
import { FiPower } from "react-icons/fi";
import { AiOutlineMore } from "react-icons/ai";

export default function Dashboard() {
  //button dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };
  //button dropdown
  return (
    <div>
      <div className="p  sm:ml-[17.5rem]">
        <div className="">
          <div className="mx-auto">
            <div className="block h-[5rem] w-[96rem] bg-white mx-auto rounded-lg shadow-lg p-4">
              {/* dropdown menu */}
              <div className="flex justify-between items-center">
                <p className="text-[#8492a2] text-[1.1rem] pl-4">
                  ระบบเชื่อมต่อข้อมูลระหว่าง HIS และระบบบันทึกข้อมูล PPKHOS API
                </p>

                <div className="relative pr-4">
                  {/* Dropdown button */}
                  <button
                    type="button"
                    id="user-menu-button"
                    className="flex text-sm bg-[#ffbae9] rounded-full focus:ring-4 focus:ring-[#ffbae9] dark:focus:ring-[#ffbae9] "
                    onClick={toggleDropdown}
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-[3rem] h-[3rem] rounded-full"
                      src="/images/icon.png"
                      alt="user photo"
                    />
                  </button>

                  {/* Dropdown menu */}
                  {isDropdownOpen && (
                    <div
                      className="absolute right-0 z-50 my-4 text-base list-none bg-white divide-y divide-gray-300 rounded-lg shadow-2xl p-4 w-[16rem]"
                      id="user-dropdown"
                    >
                      <div className="flex gap-2 items-center">
                        <img
                          className="w-[3rem] h-[3rem] rounded-full bg-[#ffbae9]"
                          src="/images/icon.png"
                          alt="user photo"
                        />
                        <div className="px-4 py-3">
                          <span className="block text-xl text-[#d60092]">
                            ชื่อผู้ใช้งาน
                          </span>
                          <span className="block text-sm text-[#707c8a]">
                            ตำเเหน่ง:
                          </span>
                        </div>
                      </div>
                      <ul className="py-2" aria-labelledby="user-menu-button">
                        <li>
                          <a
                            href="#"
                            className="px-4 py-2 text-l text-[#707c8a] flex gap-2 items-center mt-2 hover:bg-[#ffbae9] hover:text-[#d60092] rounded-lg"
                          >
                            <div className="text-xl">
                              <VscAccount />
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
                              <VscGear />
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
                              <FiPower />
                            </div>
                            <p>Logout</p>
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}

                  {/* Close dropdown on click outside */}
                  {isDropdownOpen && (
                    <div
                      className="fixed inset-0 z-40"
                      onClick={closeDropdown}
                    />
                  )}
                </div>
              </div>
              {/*dropdown menu*/}
            </div>
          </div>
          <div className="mt-4 w-[96rem] h-full border mx-auto bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-[#7d8a99] text-2xl font-bold mt-2 mb-4">
              DASHBOARD
            </h1>
            <div className="flex justify-center gap-[2rem]">
              <div className="w-[46rem] h-[30rem] border">

              </div>
              <div className="w-[40rem] h-full border p-4 flex justify-center">
                <div className="grid grid-cols-2 gap-4 mx-auto">
                  <div className="w-[15rem] h-[16rem] border shadow-xl rounded-e-lg p-4">
                    <div className="flex justify-between items-center">
                      <h1 className="text-[#7d8a99] font-bold">
                        ผล HIV/PCR
                        </h1>
                      <button className="text-white bg-[#7d8a99] text-xl font-bold p border rounded-md">
                        <AiOutlineMore />
                      </button>
                    </div>
                    <div>
                      <img src="" alt="" />
                      <p className="text-[#7d8a99] text-2xl font-bold">
                        0
                      </p>
                    </div>

                  </div>
                  <div className="w-[15rem] h-[16rem] border shadow-xl rounded-e-lg p-4">
                    <div className="flex justify-between items-center">
                      <h1 className="text-[#7d8a99] font-bold">
                        ผล BC
                        </h1>
                      <button className="text-white bg-[#7d8a99] text-xl font-bold p border rounded-md">
                        <AiOutlineMore />
                      </button>
                    </div>
                    <div>
                      <img src="" alt="" />
                      <p className="text-[#7d8a99] text-2xl font-bold">
                        0
                      </p>
                    </div>

                  </div>
                  <div className="w-[15rem] h-[16rem] border shadow-xl rounded-e-lg p-4">
                    <div className="flex justify-between items-center">
                      <h1 className="text-[#7d8a99] font-bold">
                        ผล CD4
                        </h1>
                      <button className="text-white bg-[#7d8a99] text-xl font-bold p border rounded-md">
                        <AiOutlineMore />
                      </button>
                    </div>
                    <div>
                      <img src="" alt="" />
                      <p className="text-[#7d8a99] text-2xl font-bold">
                        0
                      </p>
                    </div>

                  </div>
                  <div className="w-[15rem] h-[16rem] border shadow-xl rounded-e-lg p-4">
                    <div className="flex justify-between items-center">
                      <h1 className="text-[#7d8a99] font-bold">
                        ผล VL
                        </h1>
                      <button className="text-white bg-[#7d8a99] text-xl font-bold p border rounded-md">
                        <AiOutlineMore />
                      </button>
                    </div>
                    <div>
                      <img src="" alt="" />
                      <p className="text-[#7d8a99] text-2xl font-bold">
                        0
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[96rem] mx-auto p-4">
            <div className="flex justify-between">
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
    </div>
  );
}

