import React from 'react'
import watch1 from '/public/Images/watch1.png'
import watch2 from '/public/Images/watch2.png'
import watch3 from '/public/Images/watch3.png'
import watch4 from '/public/Images/watch4.png'
import watch5 from '/public/Images/watch5.png'
import watch6 from '/public/Images/watch6.png'
import watch7 from '/public/Images/watch7.png'
import watch8 from '/public/Images/watch8.png'
import watch9 from '/public/Images/watch9.png'
import watch10 from '/public/Images/watch10.png'
import watch11 from '/public/Images/watch11.png'
// import watch12 from '/public/Images/watch12.png'
import { StaticImageData } from "next/image"

type ProductType = {
    id: number
    name: string,
    quantity: number
    img: StaticImageData
}

export const ProductList: ProductType[] = [
    {
        "id": 1,
        "name": "xyz",
        "quantity": 1,
        "img": watch1
    },
    {
        "id": 2,
        "name": "xyz",
        "quantity": 1,
        "img": watch2
    },
    {
        "id": 3,
        "name": "xyz",
        "quantity": 1,
        "img": watch3
    },
    {
        "id": 4,
        "name": "xyz",
        "quantity": 1,
        "img": watch4
    },
    {
        "id": 5,
        "name": "xyz",
        "quantity": 1,
        "img": watch5
    },
    {
        "id": 6,
        "name": "xyz",
        "quantity": 1,
        "img": watch6
    },
    {
        "id": 7,
        "name": "xyz",
        "quantity": 1,
        "img": watch7
    },
    {
        "id": 8,
        "name": "xyz",
        "quantity": 1,
        "img": watch8
    },
    {
        "id": 9,
        "name": "xyz",
        "quantity": 1,
        "img": watch9
    },
    {
        "id": 10,
        "name": "xyz",
        "quantity": 1,
        "img": watch10
    },
    {
        "id": 11,
        "name": "xyz",
        "quantity": 1,
        "img": watch11
    },
    // {
    //     "id": 12,
    //     "name": "xyz",
    //     "quantity": 1,
    //     "img": watch12
    // }

]