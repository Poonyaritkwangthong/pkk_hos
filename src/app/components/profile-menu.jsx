import React, { useState } from "react";
import { VscAccount, VscGear } from "react-icons/vsc";
import { FiPower } from "react-icons/fi";

export default function ProfileMenu() {
    const [field , setField] = useState({
        "user_name": "Poonyarit kwangthong",
        "user_role": "เด็กฝึกงาน",
        "profile_img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEhCfQFYlf_03NRCv53FFo1aE22_shmhW10Q&s"
    })
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  //button dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };
  //button dropdown
  return (
    <div>
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
                src={field.profile_img}
                alt="user photo"
              />
            </button>

            {/* Dropdown menu */}
            {isDropdownOpen && (
              <div
                className="absolute right-0 z-50 my-4 text-base list-none bg-white divide-y divide-gray-300 rounded-lg shadow-2xl p-4 w-[18rem]"
                id="user-dropdown"
              >
                <div className="flex gap-2 items-center px-4">
                  <img
                    className="w-[3rem] h-[3rem] rounded-full bg-[#ffbae9]"
                    src={field.profile_img}
                    alt="user photo"
                  />
                  <div className="px-2 py-4">
                    <span className="block text-sm text-[#d60092]">
                      {field.user_name}
                    </span>
                    <span className="block text-sm text-[#707c8a]">
                      ตำเเหน่ง: {field.user_role}
                    </span>
                  </div>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <a
                      href="/my-profile"
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
              <div className="fixed inset-0 z-40" onClick={closeDropdown} />
            )}
          </div>
        </div>
        {/*dropdown menu*/}
      </div>
    </div>
  );
}
