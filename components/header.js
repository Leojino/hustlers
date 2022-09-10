export default function Navbar() {
    return (
      <div className="fixed flex w-full p-2 text-center h-12 bg-zinc-50">
        <div className="w-64">eDEI</div>
        <div>
            <input type="text" className="border rounded-md p-1" placeholder="Search"/>
        </div>
      </div>
    );
  }
  