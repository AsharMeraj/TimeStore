'use client';
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
// import Logo from '/public/Logo.png'
import { Divide, ShoppingCart } from 'lucide-react';
// import { Search } from 'lucide-react';
import { Menu } from 'lucide-react';
import MobileNavbar from './MobileNavbar';
import Link from 'next/link';
import cart from "/public/Images/cart.png"
import account from "/public/Images/account.png"
import search from "/public/Images/search.png"
// import { useDispatch, useSelector } from 'react-redux'
// import { RootState } from '@/app/Store/Store';
// import { motion } from 'framer-motion'
// import { getCartTotal } from '@/app/Store/Slice/cartSlice';
type ParentType = {
    showMobileNav: boolean,
    setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>
}


export default function Navbar() {
    const [showMobileNav, setShowMobileNav] = useState<boolean>(false)
    const [position, setPosition] = useState(false);
    function AppearNavbar() {
        if (window.scrollY >= 200) {
            setPosition(true);
        }
        else if (window.scrollY <= 200) {
            setPosition(false);
        }

    }
    useEffect(() => {
        window.addEventListener('scroll', AppearNavbar);

    })
    // const { items, totalQuantity } = useSelector((state: RootState) => state.cart);
    // const fullCartStore = useSelector((state: RootState) => state.cart);

    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(getCartTotal());
    // }, [items])
    return (
        <div>

            <main id='nav' className='flex items-center justify-center py-8 max-[840px]:py-7'>
                <nav className=" duration-700 w-full flex items-center justify-center">
                    <div className='w-[85rem] min-[1600px]:w-full flex items-center justify-between mx-6 min-[1600px]:mx-[7.5rem]'>
                        <h1>
                            <span className='text-black text-[1.7rem] font-semibold'>Time</span>
                            <span className=' text-[--Primary-Color] text-[1.7rem] font-semibold'>Store</span>
                        </h1>
                        <ul className='flex items-center justify-between gap-x-14 max-lg:gap-x-8 max-[840px]:hidden'>
                            <li className='text-[16px] font-semibold hover:text-[--Primary-Color] duration-200 cursor-pointer select-none'>
                                <Link href={'/NavCategory/Female'}>Home</Link>
                            </li>
                            <li className='text-[16px] font-semibold hover:text-[--Primary-Color] duration-200 cursor-pointer select-none'>
                                <Link href={'/NavCategory/Kids'}>About</Link>
                            </li>
                            <li className='text-[16px] font-semibold hover:text-[--Primary-Color] duration-200 cursor-pointer select-none'>
                                <Link href={'/NavCategory/Male'}>Shop</Link>
                            </li>
                            <li className='text-[16px] font-semibold hover:text-[--Primary-Color] duration-200 cursor-pointer select-none'>
                                <Link href={'/AllProducts'}>Latest</Link>
                                <span className='w-[2.3rem] h-[1.3rem] pt-[5px] text-center align-text-center absolute rounded-lg translate-y-[-1.5rem] translate-x-[-10px] bg-[--Primary-Color] shadow-sm shadow-[rgb(150,150,150)] text-[9px] text-white font-bold tracking-wider '>HOT</span>
                            </li>

                            <li className='text-[16px] font-semibold hover:text-[--Primary-Color] duration-200 cursor-pointer select-none'>
                                <Link href={'/AllProducts'}>Contact</Link>
                            </li>
                        </ul>
                        <div className='flex flex-row gap-6 max-[840px]:hidden'>
                            <Image alt='/' className='w-[1.2rem] cursor-pointer' src={search} />
                            <Image alt='/' className='w-[1.2rem] cursor-pointer' src={account} />
                            <Link href={'/CartPage'}>
                                <Image alt='/' className='w-[1.2rem] cursor-pointer' src={cart} />
                            </Link>
                        </div>
                        {/* Only for Mobile */}
                        <Menu onClick={() => { setShowMobileNav(true) }} className='hidden max-[840px]:block cursor-pointer' />
                    </div>
                </nav>
            </main>
            <main className={position ? 'bg-white fixed top-0 shadow-xl shadow-[rgba(0,0,0,0.15)] translate-y-0 duration-700 w-full flex items-center  justify-center py-8 max-[561px]:py-7 z-10' : "absolute top-0 translate-y-[-100%]  w-full flex items-center  justify-center bg-white py-8 max-[561px]:py-7 z-10"}>
                <nav className=' w-full flex items-center justify-center'>

                    <div className='w-[85rem] min-[1600px]:w-full flex items-center justify-between mx-6 min-[1600px]:mx-[7.5rem]'>
                        <h1>
                            <span className='text-black text-[1.7rem] font-semibold'>Time</span>
                            <span className=' text-[--Primary-Color] text-[1.7rem] font-semibold'>Store</span>
                        </h1>
                        <ul className='flex items-center justify-between gap-x-14 max-lg:gap-x-8 max-[840px]:hidden'>
                            <li className='text-[16px] font-semibold hover:text-[--Primary-Color] duration-200 cursor-pointer select-none'>
                                <Link href={'/NavCategory/Female'}>Home</Link>
                            </li>
                            <li className='text-[16px] font-semibold hover:text-[--Primary-Color] duration-200 cursor-pointer select-none'>
                                <Link href={'/NavCategory/Kids'}>About</Link>
                            </li>
                            <li className='text-[16px] font-semibold hover:text-[--Primary-Color] duration-200 cursor-pointer select-none'>
                                <Link href={'/NavCategory/Male'}>Shop</Link>
                            </li>
                            <li className='text-[16px] font-semibold hover:text-[--Primary-Color] duration-200 cursor-pointer select-none'>
                                <Link href={'/AllProducts'}>Latest</Link>
                                <span className='w-[2.3rem] h-[1.3rem] pt-[5px] text-center align-text-center absolute rounded-lg translate-y-[-1.5rem] translate-x-[-10px] bg-[--Primary-Color] shadow-sm shadow-[rgb(150,150,150)] text-[9px] text-white font-bold tracking-wider'>HOT</span>
                            </li>

                            <li className='text-[16px] font-semibold hover:text-[--Primary-Color] duration-200 cursor-pointer select-none'>
                                <Link href={'/AllProducts'}>Contact</Link>
                            </li>
                        </ul>
                        <div className='flex flex-row gap-6 max-[840px]:hidden'>
                            <Image alt='/' className='w-[1.2rem] cursor-pointer' src={search} />
                            <Image alt='/' className='w-[1.2rem] cursor-pointer' src={account} />
                            <Link href={'/CartPage'}>
                                <Image alt='/' className='w-[1.2rem] cursor-pointer' src={cart} />
                            </Link>
                        </div>
                        {/* Only for Mobile */}
                        <Menu onClick={() => { setShowMobileNav(true) }} className='hidden max-[840px]:block cursor-pointer' />
                    </div>
                </nav>
            </main>
            <main className={`flex items-center rounded-l-[2rem] justify-center h-screen width ml-2 fixed top-0 duration-700 z-10  ${showMobileNav ? 'translate-x-[0] ' : 'translate-x-[100%]'}`}>
                <MobileNavbar showMobileNav={showMobileNav} setShowMobileNav={setShowMobileNav} />
            </main>
        </div>
    )
}


{/* totalQuantity === 0 ? '' :
<motion.span className='w-[1.2rem] h-[1.2rem] grid place-items-center rounded-full text-[12px] bg-red-600 text-white absolute top-[2rem] font-semibold '
initial={{scale: 0}}
whileInView={{scale: 1}}
transition={{duration: 0.2}}
>
{totalQuantity}
</motion.span> */}
