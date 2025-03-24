import Image from "next/image"

const AddPost = () => {
  return (
    <div className="p-4 shadow-md bg-white rounded-lg flex gap-4 justify-between text-sm">
      {/* AVATAR */}
      <Image
        src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="avatar"
        height={48}
        width={48}
        className="w-12 h-12 object-cover rounded-full"
      />
      {/* POST */}
      <div className="flex-1">
        {/* TEXT INPUT */}
        <div className="flex gap-4">
          <textarea className="p-2 flex-1 bg-slate-100 rounded-lg" placeholder="What's on your mind?"></textarea>
          <Image
            src="/emoji.png"
            alt="emoji"
            height={20}
            width={20}
            className="w-5 h-5 cursor-pointer self-end"
          />
        </div>
        {/* POST OPTIONS */}
        <div className="flex items-center gap-5 mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/addimage.png"
              alt="addphoto"
              height={20}
              width={20}
            />
            Photo
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/addVideo.png"
              alt="addvideo"
              height={20}
              width={20}
            />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/poll.png"
              alt="poll"
              height={20}
              width={20}
            />
            Poll
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/addevent.png"
              alt="addevent"
              height={20}
              width={20}
            />
            Event
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPost