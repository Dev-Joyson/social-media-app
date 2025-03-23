import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='flex items-center justify-center md:py-20 lg:py-20 h-[calc(100vh-96px)]'>
        <SignUp />
    </div>
  )
  
}