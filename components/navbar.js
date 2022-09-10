export default function Navbar() {
  return (
    <div className="flex w-1/5 py-6 px-4 bg-[#082642]">
      <div className="text-gray-100">
        <div className="p-2 hover:text-gray-600 cursor-pointer">Dashboard</div>
        <div className="p-2 hover:text-gray-600 cursor-pointer">Networking</div>
        <div className="p-2 hover:text-gray-600 cursor-pointer">DEI Facilities</div>
        <div className="p-2 hover:text-gray-600 cursor-pointer">Global Opportunities</div>
        <div className="p-2 hover:text-gray-600 cursor-pointer">Statistics &nbsp; Info.</div>
      </div>
    </div>
  );
}