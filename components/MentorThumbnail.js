import { useEffect, useState } from "react";

export default function MentorThumbnail({ name, position, interests }) {
  return (
    <div className="w-40 p-2 bg-slate-200 rounded-md drop-shadow-lg cursor-pointer hover:drop-shadow-xl">
      <div className="rounded-full bg-slate-900 w-20 h-20 mx-auto my-2"></div>
      <h4 className="text-center">Vienna Shanon</h4>
      <h6 className="text-xs text-center">Senior Software Engineer</h6>
      <div className="my-4 text-xs">
        <div className="font-bold">Areas of interest</div>
        <div>Hiking, Dog person, Baking</div>
      </div>
      <p className="text-orange-600 text-xs font-bold">“I have been working in this company for 7 years and am manging a team of 15 engineers.”</p>
    </div>
  );
}
