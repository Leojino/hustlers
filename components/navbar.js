import Link from 'next/link'
export default function Navbar() {
  return (
    <div className="relative flex w-1/5 py-6 px-4 bg-[#082642] text-gray-100">
      <div className="">
        <div className="p-2 hover:text-gray-600 cursor-pointer">
          <Link href="/"><a>Dashboard</a></Link>  
        </div>
        <div className="p-2 hover:text-gray-600 cursor-pointer">Networking</div>
        <div className="p-2 hover:text-gray-600 cursor-pointer">DEI Facilities</div>
        <div className="p-2 hover:text-gray-600 cursor-pointer">Global Opportunities</div>
        <div className="p-2 hover:text-gray-600 cursor-pointer">Statistics &nbsp; Info.</div>
      </div>
      <div className="absolute bottom-0 left-0 w-full p-4 text-center">Logout</div>
    </div>
  );
}