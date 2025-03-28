import Link from 'next/link'
import Image from 'next/image'

const Birthdays = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
      {/* TOP */}
      <div className='flex items-center justify-between'>
          <span className='text-gray-500'>Birthdays</span>
      </div>
        {/* USER */}
        <div className='flex items-center justify-between mt-4'>
          <div className='flex items-center gap-4'>
            <Image src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='' width={40} height={40} className='w-10 h-10 rounded-full object-cover'/>
            <span className='font-semibold'>Jack rodes</span>
          </div>
          <div className='flex gap-3 justify-end'>
            <button className='bg-blue-500 text-white text-sm px-2 py-1 rounded-md'>Celebrate</button>
          </div>
        </div>
        {/* UPCOMING */}
        <div className='p-4 bg-slate-100 rounded-lg flex items-center gap-4'>
          <Image src="/gift.png" alt='' width={24} height={24} />
          <Link href="/" className='flex flex-col gap-1 text-xs'>
            <span className='text-gray-700 font-semibold'>Upcoming Birthdays</span>
            <span className='text-gray-500'>See other 16 have upcoming birthdays</span>
          </Link>
        </div>
    </div>
  )
}

export default Birthdays