import React from 'react'
type PropType = {
    name: string
    // px: string
    // py: string
}

const Button = (props: PropType) => {
  return (
    <button className={`w-fit bg-[--Primary-Color] text-white font-semibold px-[2rem] py-[1rem]`}>{props.name}</button>
  )
}

export default Button