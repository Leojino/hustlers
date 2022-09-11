import { useEffect, useState } from "react";
import Image from 'next/image'
export default function MentorThumbnailDark({ mentor }) {
  return (
    <div className="w-48 p-2 bg-[#082642] text-gray-200 rounded-md drop-shadow-lg cursor-pointer hover:drop-shadow-xl mx-2 first:ml-0">
      <div className="relative rounded-full bg-slate-900 w-20 h-20 mx-auto my-2">
        <Image
            objectFit='contain'
            layout='fill'
            src={mentor.profilePicture}
        />
      </div>
      <h4 className="text-center">{mentor.name}</h4>
      <h6 className="text-xs text-center">{mentor.position}</h6>
      <div className="my-4 text-xs">
        <div className="font-bold text-gray-400">Areas of interest</div>
        <div className="h-7">{mentor.hobbies.join(", ")}</div>
      </div>
      <p className="text-xs font-bold my-2">“I have been working in this company for 7 years and am manging a team of 15 engineers.”</p>
      <div>
        <div className="font-bold text-gray-400">AVAILABILITIES</div>
        <small className="bg-gray-200 p-1 my-1 block text-black text-xs">Mon, 9/6/2022, 09-09:30AM</small>
        <small className="bg-gray-200 p-1 my-1 block text-black text-xs">Tue, 9/7/2022, 11-11:30AM</small>
        <small className="bg-gray-200 p-1 my-1 block text-black text-xs">Fri, 09/8/2022, 03-03:30PM</small>
      </div>
    </div>
  );
}
