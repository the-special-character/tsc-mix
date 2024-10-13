"use client";
import { CareerPage6dataType } from "@/utils/types";
import Image from "next/image";
import React from 'react'


const CareerPage6 = ({ data }: CareerPage6dataType) => {
  return (
    <section className="">
        <div className="md:grid grid-cols-2 gap-6 lg:gap-x-16">
          <div className="">
            <Image src={data.src} alt="image" height={600} width={600} />
          </div>
          <div className="mt-8 md:m-0">
            <h2 className="font-bold text-3xl lg:text-6xl">
              {data.title}
            </h2>
            <div className="mt-8 leading-6 flex flex-col lg:gap-10 gap-16 lg:text-subtitle1">
              <p>
                {data.desc1}
              </p>
              <p>
                {data.desc2}
              </p>
              <p>
                {data.desc3}
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default CareerPage6