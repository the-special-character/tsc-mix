import React from 'react'
import { Button } from '@/components/ui/button'
import ServiceBox from '@/components/ServiceBox'

type Props = {}

const SectionBox = (props: Props) => {
  return (
    <section>
      <ServiceBox />
      <div className=' grid justify-start lg:px-4'>
        <Button variant="default" size="lg" className="">
          <span>Lets Discuss Our Partnership</span><span>&rarr;</span>
        </Button>
      </div>

    </section>
  )
}

export default SectionBox