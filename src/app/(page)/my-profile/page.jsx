"use client";
import React, { useState } from "react";
import { GoArrowLeft } from "react-icons/go";

export default function page() {
  const [field , setField] = useState({
    "user_name": "Poonyarit kwangthong",
    "user_role": "เด็กฝึกงาน",
    "profile_img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEhCfQFYlf_03NRCv53FFo1aE22_shmhW10Q&s"
})
  return (
    <div>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="flex shadow-2xl">
          <div className="bg-gray-200 w-[35rem] h-[45rem] p-[4rem]">
            <div className="w-[20rem] h-[20rem] rounded-full bg-white mx-auto mt-[3rem] mb-[3rem] overflow-hidden">
              <img className="w-full h-full" src={field.profile_img} alt="" />
            </div>
            <div>
              <h1 className="text-3xl text-[#d60092] text-center mb-2">
                {field.user_name}
              </h1>
              <h2 className="text-2xl text-gray-500 text-center">
                ตำเเหน่งงาน : {field.user_role}
              </h2>
            </div>
          </div>
          <div className="bg-white w-[60rem] h-[45rem] p-[2rem]">
            <h1 className="text-gray-500 text-4xl mb-4">PROFILE</h1>
            <div className="w-[55rem] h-[35rem] ">
              <h2 className="text-3xl text-[#d60092]">{field.user_name}</h2>
              <h1></h1>
            </div>

            <a href="/data_nap_plus" className="flex justify-end">
              <div className="bg-[#ffbae9] text-[#d60092] p-2 rounded-lg w-[10rem] hover:scale-105 delay-100 hover:bg-[#ffd1f1] flex items-center justify-center gap-1">
              <h1 className="text-xl"><GoArrowLeft /></h1>
                back
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
