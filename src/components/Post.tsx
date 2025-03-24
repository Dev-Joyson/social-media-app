import Image from "next/image"
import Comments from "./Comments"

const Post = () => {
    return (
        <div className="flex flex-col gap-4">
            {/* USER */}
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-4">
                    <Image className="w-10 h-10 rounded-full object-cover" src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="profileImage" width={40} height={40} />
                    <span className="font-medium">Dorin McBride</span>
                </div>
                <Image src="/more.png" alt="moreImage" width={16} height={16} />
            </div>
            {/* DESC */}
            <div className="flex flex-col gap-4">
                <div className="w-full min-h-96 relative">
                    <Image src="https://images.pexels.com/photos/31223301/pexels-photo-31223301/free-photo-of-dramatic-tokyo-skyline-at-twilight-with-tokyo-tower.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" fill className="object-cover rounded-md" alt="moreImage"/>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque repellat nesciunt, nisi temporibus nulla minus dolorum? Modi quis fuga tempora nam rerum architecto culpa! Ratione non eligendi molestias perferendis cupiditate.</p>
            </div>
            {/* INTERACTION */}
            <div className="flex items-center justify-between text-sm my-4">
                <div className="flex gap-8">
                    <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                        <Image src="/like.png" alt="likeImage" className="cursor-pointer" width={16} height={16} />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">37<span className="hidden md:inline"> Likes</span></span>
                    </div>
                    <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                        <Image src="/comment.png" alt="commentImage" className="cursor-pointer" width={16} height={16} />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">37<span className="hidden md:inline"> Comments</span></span>
                    </div>
                </div>
                <div className="">
                <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                        <Image src="/share.png" alt="likeImage" className="cursor-pointer" width={16} height={16} />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">37<span className="hidden md:inline"> Shares</span></span>
                    </div>
                </div>
            </div>
            <Comments />
        </div>
    )
}

export default Post