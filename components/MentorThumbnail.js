import { useEffect, useState } from "react";

export default function MentorThumbnail({name, position, interests}) {


    return (
        <div className="rounded-md p-2 border border-slate-400 bg-slate-600">
            {name}
            {position}
            {interests}
        </div>
    )
}