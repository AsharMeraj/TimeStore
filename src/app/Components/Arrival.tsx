import React from 'react'
import Image from 'next/image'
import arrival1 from '/public/Images/arrival1.webp'
import arrival2 from '/public/Images/arrival2.webp'
import arrival3 from '/public/Images/arrival3.png'

const Arrival = () => {
    return (
        <div className='w-full h-fit mb-[15rem] max-[840px]:mb-[5rem] flex justify-center'>
            <main className='flex flex-col gap-8 w-fit  mx-6'>
                <h2 className='text-[2.5rem] w-fit max-[840px]:text-[2rem] max-[561px]:text-[2rem] font-bold max-[970px]:m-auto'>New Arrival</h2>
                <div className="flex gap-7 flex-wrap justify-center w-fit">
                    <div className="w-fit">
                        <Image
                            src={arrival1}
                            alt=""
                            className='w-[22rem] max-[1170px]:w-[20rem] max-[1070px]:w-[18rem] hover:scale-105 duration-200'
                        />
                    </div>
                    <div className="w-fit">
                        <Image
                            src={arrival2}
                            alt=""
                            className='w-[22rem] max-[1170px]:w-[20rem] max-[1070px]:w-[18rem] hover:scale-105 duration-200'
                        />
                    </div>
                    <div className="w-fit">
                        <Image
                            src={arrival3}
                            alt=""
                            className='w-[22rem] max-[1170px]:w-[20rem] max-[1070px]:w-[18rem] hover:scale-105 duration-200'
                        />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Arrival