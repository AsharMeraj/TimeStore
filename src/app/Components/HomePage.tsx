import React from 'react'
import Image from 'next/image'
import watch from '/public/Images/watchbg.png'
import Button from './Button/Button'
// max-[840px]:min-h-[calc(100vh-10rem)]
const HomePage = () => {
  return (
    <section className='w-full min-[1700px]:h-[60rem] max-[840px]:h-[40rem] max-[602px]:h-[32rem] h-[50rem] bg-[rgb(240,240,242)] items-center flex justify-center px-6 '>
      <main className='flex gap-2 w-[65rem] max-[1700px]:w-[55rem] max-[1005px]:w-full max-[561px]:gap-4 justify-between h-fit items-center'>
        <div className='flex flex-col gap-8 w-[40rem]  justify-center'>
          <h1 className='min-[1700px]:text-[4.5rem] text-[4rem] font-bold max-[840px]:text-[3rem] max-[602px]:text-[2rem]'>Select Your New Perfect Style</h1>
          <p className='text-[1.2rem] mr-8 max-[561px]:mr-0 max-[561px]:text-[1rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime deserunt nulla aliquid,  Mollitia.</p>
          <Button name='SHOP NOW' h="4rem" w='10rem' />
        </div>
        <Image alt='/' className='rounded-br-[45%] rounded-bl-[56%]  ml-6 max-[561px]:ml-4 imgbefore min-[1700px]:w-[21rem] min-[1700px]:h-[60rem] w-[18rem] h-[50rem] max-[840px]:h-[40rem] max-[602px]:h-[32rem] max-[500px]:hidden' src={watch} />
      </main>

    </section>
  )
}

export default HomePage