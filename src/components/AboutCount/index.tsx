import { AboutData } from '@/lib/constData'
import React from 'react'

type Props = {}

const AboutCount = (props: Props) => {
  return (
    <div className='bg-primary'>
      <section className=" text-background">
        <div className="bg-primary grid gap-10  ">
          <div className="">
            <h2 className="text-heading1 text-yellow ">
              Key facts <span className='text-background'>about us </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {AboutData.map((x) => (
              <div key={x.id}>
                <h3 className="text-yellow text-heading3">{x.title1}</h3>
                <h4 className="text-heading6">{x.title2}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutCount