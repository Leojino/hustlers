import Image from 'next/image'
export default function Header() {
    return (
      <div className="fixed flex w-full p-2 text-center h-12 bg-zinc-50">
        <div className="w-64 relative">
          <Image
          objectFit='contain'
          layout='fill'
            src="/images/icons/amentorzon.png"
          />
        </div>
        <div>
            <input type="text" className="border rounded-md p-1" placeholder="Search"/>
        </div>
      </div>
    );
  }
  