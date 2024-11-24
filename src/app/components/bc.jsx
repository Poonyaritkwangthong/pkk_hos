
import React, { useState } from "react";
import { VscAccount, VscGear } from "react-icons/vsc";
import { FiPower } from "react-icons/fi";

export default function BC() {
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
                            Blood Chemistry Requests
                        </h1>
                        <div className="text-[#707c8a] flex gap-4 justify-none items-center mb-4">
                            <div className="">
                                <label htmlFor="">จากวันที่</label>
                                <br />
                                <input
                                    className="border p-2 rounded-lg w-[22rem]"
                                    type="date"
                                />
                            </div>
                            <div className="">
                                <label htmlFor="">ถึงวันที่วันที่</label>
                                <br />
                                <input
                                    className="border p-2 rounded-lg w-[22rem]"
                                    type="date"
                                />
                            </div>
                            <div className="">
                                <br />
                                <button className="text-center bg-[#ffbae9] text-[#d60092] p-3 rounded-lg w-[22rem] hover:scale-105 delay-100 hover:bg-[#ffd1f1]">
                                    ค้นหา
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-between border-t mb-6">
                            <div className="text-[#707c8a] flex gap-2 items-center mt-4">
                                <p>Show</p>
                                <select name="" id="" className="border p-1 rounded-lg">
                                    <option value="">10</option>
                                    <option value="">25</option>
                                    <option value="">50</option>
                                    <option value="">100</option>
                                </select>
                                <p>entries</p>
                            </div>
                            <div className="text-[#707c8a] flex gap-2 items-center">
                                <label htmlFor="">Search</label>
                                <input className="border p-1 pl-2 rounded-lg" type="text" />
                            </div>
                        </div>
                        <div className="mx-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="text-center text-[#7d8a99] text-sm border-b">
                                        <th className="p-2 pb-4">LEB_TYPE</th>
                                        <th className="p-2 pb-4">HN</th>
                                        <th className="p-2 pb-4">LAB_REQUEST_ID</th>
                                        <th className="p-2 pb-4">REQUEST_DATE</th>
                                        <th className="p-2 pb-4">LAB_STATUS</th>
                                        <th className="p-2 pb-4">REPORT_DATE</th>
                                        <th className="p-2 pb-4">LAB_RESULT</th>
                                        <th className="p-2 pb-4">ส่งผล</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="text-[#7d8a99] border-b">
                                        <td className="p-4"></td>
                                        <td className="p-4"></td>
                                        <td className="p-4"></td>
                                        <td className="p-4"></td>
                                        <td className="p-4"></td>
                                        <td className="p-4"></td>
                                        <td className="p-4"></td>
                                        <td className="p-4"></td>
                                        <td className="p-4"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <p className="text-[#d60092]">Showing 0 to 0 of 0 entries</p>

                            <div className="flex gap-2">
                                <button className="p-2 bg-gray-100 text-gray-500 rounded-lg hover:scale-105 hover:bg-gray-200 shadow-xl">
                                    Previous
                                </button>
                                <button className="p-2 bg-gray-100 text-gray-500 rounded-lg hover:scale-105 hover:bg-gray-200 shadow-xl">
                                    Next
                                </button>
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
