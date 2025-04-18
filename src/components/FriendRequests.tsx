import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FriendRequests = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
        {/* TOP */}
        <div className='flex items-center justify-between'>
          <span className='text-gray-500'>Friend Request</span>
          <Link href="/" className='text-blue-500 text-xs'>See all</Link>
        </div>
        {/* USER */}
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <Image src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='' width={40} height={40} className='w-10 h-10 rounded-full object-cover'/>
            <span className='font-semibold'>Jack rodes</span>
          </div>
          <div className='flex gap-3 justify-end items-center'>
            <Image src="/accept.png" alt='' width={20} height={20} className='cursor-pointer'/>
            <Image src="/reject.png" alt='' width={20} height={20} className='cursor-pointer'/>
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <Image src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='' width={40} height={40} className='w-10 h-10 rounded-full object-cover'/>
            <span className='font-semibold'>Jack rodes</span>
          </div>
          <div className='flex gap-3 justify-end items-center'>
            <Image src="/accept.png" alt='' width={20} height={20} className='cursor-pointer'/>
            <Image src="/reject.png" alt='' width={20} height={20} className='cursor-pointer'/>
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <Image src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='' width={40} height={40} className='w-10 h-10 rounded-full object-cover'/>
            <span className='font-semibold'>Jack rodes</span>
          </div>
          <div className='flex gap-3 justify-end items-center'>
            <Image src="/accept.png" alt='' width={20} height={20} className='cursor-pointer'/>
            <Image src="/reject.png" alt='' width={20} height={20} className='cursor-pointer'/>
          </div>
        </div>
    </div>
  )
}

export default FriendRequests