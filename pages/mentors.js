import Image from 'next/image'
import { useEffect, useState } from 'react'
import MentorThumbnailDark from '../components/MentorThumbnailDark'
export default function Mentors() {
    const [mentors, setMentors] = useState(null);
    useEffect(() => {
        fetch("/api/returnmentors")
        .then(res => res.json())
        .then(data => {
            console.log(data.returnData);
            setMentors(data.returnData);
        });
    }, [])
    return (
        <div className="w-full overflow-auto pb-5">
            <div className="w-80 h-64 p-10 relative mx-auto">
                <Image
                    objectFit='contain'
                    layout='fill'
                    src="/images/others/networkImg.png"
                />
            </div>
            <div className="relative mx-5">
                {mentors && <h5 className='text-[#082642] font-bold text-xl'>BEST {mentors.length} MENTORS WE RECOMMENDED FOR YOU:</h5>}
                <div className="flex">
                    {
                        mentors ?
                        mentors.map( (mentor, index) => <MentorThumbnailDark key={index} mentor={mentor}/>) :
                        "Loading"
                    }
                </div>
            </div>
        </div>
    )
}