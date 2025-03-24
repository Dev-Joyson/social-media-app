import Image from "next/image"

const Comments = () => {
  return (
    <div className="flex flex-col gap-8">
        {/* WRITE */}
        <div className="flex items-center gap-4"> 
            <Image src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width={32} height={32} className="object-cover w-8 h-8 rounded-full"/>
            <div className="flex flex-1 items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
                <input type="text" placeholder="Write a comment..." className="flex-1 bg-transparent outline-none"/>
                <Image src="/emoji.png" alt="" width={16} height={16} className="cursor-pointer"/>
            </div>
        </div>
        {/* COMMENTS */}
        <div className="">
            {/* COMMENT */}
            <div className="flex gap-4 justify-between mt-6">
                {/* AVATAR */}
                <Image src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width={40} height={40} className="object-cover w-10 h-10 rounded-full"/>
                {/* DESCRIPTION */}
                <div className="flex flex-1 flex-col gap-2">
                    <span className="font-medium">Bernice Spencer</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptates vel eligendi. Similique minima nihil aspernatur praesentium enim, autem hic voluptatibus optio possimus, quae at nesciunt provident. Impedit, quidem aperiam.</p>
                    <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
                        <div className="flex items-center gap-4">
                            <Image src="/like.png" alt="" width={12} height={12} className="cursor-pointer w-4 h-4" />
                            <span className="text-gray-300">|</span>
                            <span className="text-gray-500">123 Likes</span>
                        </div>
                        <div className="">Reply</div>
                    </div>
                </div>
                {/* ICON */}
                <Image src="/more.png" alt="" width={16} height={16} className="cursor-pointer w-4 h-4" />
            </div>
        </div>
    </div>
  )
}

export default Comments