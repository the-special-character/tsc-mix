import { CareerPage5dataType } from '@/utils/types'
import React from 'react'

const CareerPage5 = ({ data }: CareerPage5dataType) => {
  return (
    <section className="">
      <div className="bg-gray1 p-12 flex flex-col justify-center text-center ">
        <div><h2 className="text-heading5">{data.title}</h2></div>
        <div className="mt-8 text-subtitle2 md:grid grid-cols-3">
          <div className="border-b-2 border-blue md:border-r-2 md:border-b-0"><p className="py-4 md:px-12">{data.desc1}</p></div>
          <div className="border-b-2 border-blue md:border-r-2 md:border-b-0"><p className="py-4 md:px-12">{data.desc2}</p></div>
          <div className=""><p className="py-4 md:px-12">{data.desc3}</p></div>
        </div>
      </div>
    </section>
  )
}

export default CareerPage5