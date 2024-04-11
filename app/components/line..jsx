import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

function line() {
  return (
    <>
    <div className="myline">
    <Link href='/line'>    
    <Image src="/img/line.png" width={50} height={50} className='bounce' alt="line" />
    
    </Link>
    </div>
      
    </>
  )
}

export default line
