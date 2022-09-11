import { useEffect, useState } from "react";
import Image from 'next/image'

export default function MentorThumbnail({ mentor }) {
  return (
    <div className="w-40 p-2 bg-slate-200 rounded-md drop-shadow-lg cursor-pointer hover:drop-shadow-xl mx-2 first:ml-0">
      <div className="rounded-full bg-slate-900 w-20 h-20 mx-auto my-2 relative">
        <Image
            objectFit='contain'
            layout='fill'
            src={mentor.profilePicture}
        />
      </div>
      <h4 className="text-center">{mentor.name}</h4>
      <h6 className="text-xs text-center">{mentor.position}</h6>
      <div className="my-4 text-xs">
        <div className="font-bold">Areas of interest</div>
        <div className="h-6">{mentor.hobbies.join(", ")}</div>
      </div>
      <p className="text-orange-600 text-xs font-bold">“I have been working in this company for 7 years and am manging a team of 15 engineers.”</p>
    </div>
  );
}
