"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { ProductList } from './ProductList/ProductList';
import { ProductType } from './ProductList/ProductList';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Button from './Button/Button';
import Link from 'next/link';

type settingtype = {
  dots: boolean,
  infinite: boolean,
  speed: number,
  slidesToShow: number,
  slidesToScroll: number
}


const SliderMenu = () => {
  const fourProduct = ProductList.slice(3,9)
  const [num, setNum] = useState<number>(1);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: num,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const newNum = width >= 840 ? 3 : 1;
      setNum(newNum);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <main className='mb-[15rem] max-[840px]:mb-[5rem] flex flex-col items-center'>
      <h2 className='min-[1700px]:text-[3.5rem] text-[2.8rem] font-bold max-[840px]:text-[2.5rem] max-[602px]:text-[2rem] text-center max-[340px]:text-[1.5rem]'>Popular Items</h2>
      <p className=' max-w-[40rem] text-center text-[1.2rem] text-black/70 mx-6 max-[561px]:text-[1rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, autem, aperiam asperiores maiores doloribus repellat iusto</p>
      <Slider {...settings} className='w-[70rem] max-[1180px]:w-[60rem] max-lg:w-[53rem] max-[920px]:w-[48rem] max-[840px]:w-[16rem] focus:outline-none mt-[4rem] max-[840px]:mt-[2rem]'>
        {
          fourProduct.map((item: ProductType) => {
            return <div className='w-fit focus:outline-none' key={item.id}>
              <Image className='w-[20rem] max-[1180px]:w-[18rem] max-lg:w-[16rem] max-[920px]:w-[14rem] max-[840px]:w-[16rem] bg-[rgb(246,246,246)] border-b-4 border-[--Primary-Color] m-auto' alt='' src={item.img} />
              <h2 className='text-center text-[1.3rem] text-black/70 font-bold max-[840px]:text-[1rem] w-fit mx-auto mt-4'>{item.name}</h2>
              <h3 className='mt-2 text-center w-fit mx-auto text-[1.2rem] font-semibold max-[840px]:text-[1rem] text-[rgb(255,32,32)]'>${item.price}</h3>
            </div>
          })
        }
      </Slider>
      <div className='mt-[4rem] max-[840px]:mt-[2rem]'>
        <Link href={'/'}>
          <Button name='VIEW MORE PRODUCTS' />
        </Link>
      </div>
    </main>
  )
}

export default SliderMenu