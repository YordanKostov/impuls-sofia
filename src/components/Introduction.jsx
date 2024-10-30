import React from 'react'

const Introduction = ({ content, name, title, img }) => {
  return (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
      <div className='flex flex-row'>
        <img
          src={img}
          alt={name}
          className='w-[70px] h-[70px] rounded-full'
        />
        <div className='flex flex-col ml-4'>
          <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-zinc-950'>{name}</h4>
          <p className='font-poppins font-normal text-[16px] leading-[24px] text-zinc-950'>{title}</p>
        </div>
      </div>
      <p className='font-poppins font-normal text-[18px] leading-[32px] text-zinc-950 my-10'>
        {content}
      </p>
      
    </div>
  )
}

export default Introduction