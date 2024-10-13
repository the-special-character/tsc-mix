import { CareerCVType } from '@/utils/types'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'


const CareerCV = ({ data }: CareerCVType) => {
  return (
    <section className='bg-gray border-2 border-gray'>
      <div className='lg:py-10 py-3'>
        <h2 className=' text-heading1 text-center'>{data.title}</h2>
      </div>
      <Link title='Send a CV anyway' className="grid pt-10 " href={"#Contact"}>
        <Button
          variant="default"
          type="submit"
          size="lg"

        >
          Send a CV anyway
        </Button>
      </Link>
    </section>
  )
}

export default CareerCV