import React from 'react'
import watch1 from '/public/Images/watch1.jpg'
import watch2 from '/public/Images/watch2.jpg'
import watch3 from '/public/Images/watch3.jpg'
import watch4 from '/public/Images/watch4.jpg'
import watch5 from '/public/Images/watch5.jpg'
import watch6 from '/public/Images/watch6.jpg'
import watch7 from '/public/Images/watch7.jpg'
import watch8 from '/public/Images/watch8.jpg'
import watch9 from '/public/Images/watch9.jpg'
import watch10 from '/public/Images/watch10.jpg'
import watch11 from '/public/Images/watch11.jpg'
import watch12 from '/public/Images/watch12.jpg'
import { StaticImageData } from "next/image"

export type ProductType = {
    id: number
    name: string
    quantity: number
    price: number
    img: StaticImageData
}

export const ProductList: ProductType[] = [
    {
        "id": 1,
        "name": "Daniel Klein 44mm Analog Mens Watch",
        "quantity": 1,
        "price": 1630,
        "img": watch1
    },
    {
        "id": 2,
        "name": "Danial Klein Blue Diel Men's Watch",
        "quantity": 1,
        "price": 6630,
        "img": watch2
    },
    {
        "id": 3,
        "name": "Daniel Klein Multifunction Stainless Steel Blue Dial Watch",
        "quantity": 1,
        "price": 1945,
        "img": watch3
    },
    {
        "id": 4,
        "name": "Daniel Klein IP Black Premium Black Dial 3 Hands Watch",
        "quantity": 1,
        "price": 1645,
        "img": watch4
    },
    {
        "id": 5,
        "name": "Daniel Klein Premium Champagne Dial 3 Hands Date Watch",
        "quantity": 1,
        "price": 1445,
        "img": watch5
    },
    {
        "id": 6,
        "name": "Daniel Klein Exclusive Black Dial Multifunction Watch",
        "quantity": 1,
        "price": 1545,
        "img": watch6
    },
    {
        "id": 7,
        "name": "Daniel Klein Exclusive White Dial Multifunction Watch",
        "quantity": 1,
        "price": 1645,
        "img": watch7
    },
    {
        "id": 8,
        "name": "Daniel Klein Exclusive Black Dial Multifunction Watch",
        "quantity": 1,
        "price": 1545,
        "img": watch8
    },
    {
        "id": 9,
        "name": "Daniel Klein Exclusive Black Dial Multifunction Watch",
        "quantity": 1,
        "price": 1545,
        "img": watch9
    },
    {
        "id": 10,
        "name": "Daniel Klein Premium Green Dial 3 Hands Watch",
        "quantity": 1,
        "price": 1445,
        "img": watch10
    },
    {
        "id": 11,
        "name": "Daniel Klein Gents Exclusive Multifunction",
        "quantity": 1,
        "price": 2045,
        "img": watch11
    },
    // {
    //     "id": 12,
    //     "name": "xyz",
    //     "quantity": 1,
    //     "img": watch12
    // }

]