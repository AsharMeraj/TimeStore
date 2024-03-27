import React from 'react'
import Image from 'next/image'
import arrival1 from '/public/Images/arrival1.webp'
import arrival2 from '/public/Images/arrival2.webp'
import arrival3 from '/public/Images/arrival3.png'

const Arrival = () => {
    return (
        <div className='w-full h-fit mb-[15rem] max-[840px]:mb-[5rem] flex justify-center'>
            <main className='flex flex-col gap-8 w-fit  mx-6'>
                <h2 className='text-[2.5rem] w-fit max-[840px]:text-[2rem] max-[561px]:text-[2rem] font-bold max-[967px]:m-auto'>New Arrival</h2>
                <div className="flex gap-7 flex-wrap justify-center w-fit">
                    <div className="w-fit">
                        <span className='flex flex-col items-center hover:scale-105 duration-200 w-[22rem] max-[1170px]:w-[20rem] max-[1070px]:w-[18rem] h-full'>
                            <Image
                                src={arrival1}
                                alt=""
                                className=' -z-0'
                            />
                            <h2 className='text-center text-[1.5rem] text-black/70 font-bold max-[840px]:text-[1.2rem] w-fit  mt-4 mx-2'>Danial Wellington Classic</h2>
                            <h3 className='mt-2 text-center w-fit text-[1.2rem] font-semibold max-[840px]:text-[1rem] text-[rgb(255,32,32)]'>$ 179.00</h3>
                        </span>
                    </div>
                    <div className='w-fit'>
                        <span  className='flex flex-col items-center hover:scale-105 duration-200 w-[22rem] max-[1170px]:w-[20rem] max-[1070px]:w-[18rem] h-full'>
                            <Image
                                src={arrival2}
                                alt=""
                                className=' -z-0'
                            />
                            <h2 className='text-center text-[1.5rem] text-black/70 font-bold max-[840px]:text-[1.2rem] w-fit  mt-4 mx-2'>Storm London Logan</h2>
                            <h3 className='mt-2 text-center w-fit text-[1.2rem] font-semibold max-[840px]:text-[1rem] text-[rgb(255,32,32)]'>$ 309.99</h3>
                        </span>
                    </div>
                    <div>
                        <span  className='flex flex-col items-center  hover:scale-105 duration-200 w-[22rem] max-[1170px]:w-[20rem] max-[1070px]:w-[18rem] h-full'>
                            <Image
                                src={arrival3}
                                alt=""
                                className=' -z-0'
                            />
                            <h2 className='text-center text-[1.5rem] text-black/70 font-bold max-[840px]:text-[1.2rem] w-fit  mt-4 mx-2'>Movado Work Choronograph</h2>
                            <h3 className='mt-2 text-center w-fit text-[1.2rem] font-semibold max-[840px]:text-[1rem] text-[rgb(255,32,32)]'>$ 300.00</h3>
                        </span>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Arrival