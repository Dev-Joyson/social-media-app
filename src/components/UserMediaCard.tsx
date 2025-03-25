import Image from "next/image"
import Link from "next/link"

const UserMediaCard = ({ userId }: { userId: string }) => {
    return (
        <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
            {/* TOP */}
            <div className='flex items-center justify-between'>
                <span className='text-gray-500'>User Media</span>
                <Link href="/" className='text-blue-500 text-xs'>See all</Link>
            </div>
            {/* BOTTOM */}
            <div className="flex gap-4 justify-between flex-wrap">
                <div className="relative w-1/5 h-24">
                    <Image className="object-cover rounded-md" src="https://images.pexels.com/photos/31147896/pexels-photo-31147896/free-photo-of-charming-thatched-cottage-in-cotswolds-england.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill/>
                </div>
                <div className="relative w-1/5 h-24">
                    <Image className="object-cover rounded-md" src="https://images.pexels.com/photos/31147896/pexels-photo-31147896/free-photo-of-charming-thatched-cottage-in-cotswolds-england.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill/>
                </div>
                <div className="relative w-1/5 h-24">
                    <Image className="object-cover rounded-md" src="https://images.pexels.com/photos/31083975/pexels-photo-31083975/free-photo-of-rustic-church-in-aldwark-england-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill/>
                </div>
                <div className="relative w-1/5 h-24">
                    <Image className="object-cover rounded-md" src="https://images.pexels.com/photos/31147896/pexels-photo-31147896/free-photo-of-charming-thatched-cottage-in-cotswolds-england.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill/>
                </div>
                <div className="relative w-1/5 h-24">
                    <Image className="object-cover rounded-md" src="https://images.pexels.com/photos/31147896/pexels-photo-31147896/free-photo-of-charming-thatched-cottage-in-cotswolds-england.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill/>
                </div>
                <div className="relative w-1/5 h-24">
                    <Image className="object-cover rounded-md" src="https://images.pexels.com/photos/31147896/pexels-photo-31147896/free-photo-of-charming-thatched-cottage-in-cotswolds-england.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill/>
                </div>
                <div className="relative w-1/5 h-24">
                    <Image className="object-cover rounded-md" src="https://images.pexels.com/photos/31147896/pexels-photo-31147896/free-photo-of-charming-thatched-cottage-in-cotswolds-england.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill/>
                </div>
                <div className="relative w-1/5 h-24">
                    <Image className="object-cover rounded-md" src="https://images.pexels.com/photos/31147896/pexels-photo-31147896/free-photo-of-charming-thatched-cottage-in-cotswolds-england.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill/>
                </div>
            </div>
        </div>
    )
}

export default UserMediaCard