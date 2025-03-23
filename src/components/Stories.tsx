import Image from "next/image"

const Stories = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide">
      <div className="flex gap-8 w-max">
        {/* STORY */}
          <div className="flex flex-col items-center gap-2 cursor-pointer">
            <Image src="https://images.pexels.com/photos/31039333/pexels-photo-31039333/free-photo-of-elegant-barcelona-balcony-view-from-apartment.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="story" height={80} width={80} className="w-20 h-20 rounded-full ring-2 ring-blue-300"/>
            <span className="font-medium">Jhon Doe</span>
          </div>
          <div className="flex flex-col items-center gap-2 cursor-pointer">
            <Image src="https://images.pexels.com/photos/31039333/pexels-photo-31039333/free-photo-of-elegant-barcelona-balcony-view-from-apartment.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="story" height={80} width={80} className="w-20 h-20 rounded-full ring-2 ring-blue-300"/>
            <span className="font-medium">Jhon Doe</span>
          </div>
          <div className="flex flex-col items-center gap-2 cursor-pointer">
            <Image src="https://images.pexels.com/photos/31039333/pexels-photo-31039333/free-photo-of-elegant-barcelona-balcony-view-from-apartment.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="story" height={80} width={80} className="w-20 h-20 rounded-full ring-2 ring-blue-300"/>
            <span className="font-medium">Jhon Doe</span>
          </div>
          <div className="flex flex-col items-center gap-2 cursor-pointer">
            <Image src="https://images.pexels.com/photos/31039333/pexels-photo-31039333/free-photo-of-elegant-barcelona-balcony-view-from-apartment.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="story" height={80} width={80} className="w-20 h-20 rounded-full ring-2 ring-blue-300"/>
            <span className="font-medium">Jhon Doe</span>
          </div>
          <div className="flex flex-col items-center gap-2 cursor-pointer">
            <Image src="https://images.pexels.com/photos/31039333/pexels-photo-31039333/free-photo-of-elegant-barcelona-balcony-view-from-apartment.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="story" height={80} width={80} className="w-20 h-20 rounded-full ring-2 ring-blue-300"/>
            <span className="font-medium">Jhon Doe</span>
          </div>
          <div className="flex flex-col items-center gap-2 cursor-pointer">
            <Image src="https://images.pexels.com/photos/31039333/pexels-photo-31039333/free-photo-of-elegant-barcelona-balcony-view-from-apartment.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="story" height={80} width={80} className="w-20 h-20 rounded-full ring-2 ring-blue-300"/>
            <span className="font-medium">Jhon Doe</span>
          </div>
          <div className="flex flex-col items-center gap-2 cursor-pointer">
            <Image src="https://images.pexels.com/photos/31039333/pexels-photo-31039333/free-photo-of-elegant-barcelona-balcony-view-from-apartment.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="story" height={80} width={80} className="w-20 h-20 rounded-full ring-2 ring-blue-300"/>
            <span className="font-medium">Jhon Doe</span>
          </div>
      </div>
    </div>
  )
}

export default Stories