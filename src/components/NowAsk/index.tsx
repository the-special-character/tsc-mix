import { nowask } from '@/lib/constData'
import React from 'react'

type Props = {}

const NowAsk = (props: Props) => {
  return (
    <section className='bg-gray  md:p-8 border-2 border-gray lg:m-36 m-4    '>
      <div className='text-center lg:text-4xl lg:pb-8 justify-between font-extrabold md:text-2xl text-2xl m-10 '>
        <h2>Now ask yourself (and be honest)</h2>
      </div>
      <div className='flex flex-col md:flex-row  justify-between  m-10'>
        {nowask.map((i) => (
          <div key={i.id} className=" lg:items-center lg:justify-center md:flex-1 max-sm:border-b-2 md:border-r-2 border-blue md:text-subtitle1 sm:text-base font-extrabold text-center ">
            <div className="md:px-5 max-sm:py-5">{i.title}</div>
          </div>
        ))}


      </div>
    </section>
  )
}

export default NowAsk