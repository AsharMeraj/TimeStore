import React from 'react'
type PropType = {
    name: string
    w: string
    h: string
}

const Button = (props: PropType) => {
  return (
    <button className='bg-[--Primary-Color] text-white font-semibold' style={{width: `${props.w}`, height: `${props.h}`}}>{props.name}</button>
  )
}

export default Button