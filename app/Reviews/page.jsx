
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';




export default function HomePage() {


  return (
    <>
      <Head>
        <meta name="description" content="รีวิวจากลูกค้าจริง ลูกค้าประจำแนะนำเพื่อนบอกต่อปากต่อปาก การันตีผลงานให้ด้วย" />
        <meta name="keywords" content="ยิงads,facebook,สายเทา" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="adsmanager" />
        <meta property="og:title" content="รับทำโฆษณาออนไลน์สายเทา" />
        <meta property="og:description" content="รับทำโฆษณาออนไลน์สายเทา Google, YouTube, Facebook" />
        <link rel="canonical" href='https://www.service-ads.com/' />
      </Head>
    
      


    <div className="container">
      





    <div className="text-center">
    <h5>รีวิวจากลูกค้าจริง ลูกค้าประจำแนะนำเพื่อนบอกต่อปากต่อปาก การันตีผลงานให้ด้วย</h5>
</div>


<div className="card-group">
  <div className="card">
 
  <div className="d-flex overflow-x-auto">
          <Image src="/review/review1.jpg" alt="Review" width={480} height={480} />
          <Image src="/review/review2.jpg" alt="Review" width={480} height={480} />
          <Image src="/review/review3.jpg" alt="Review" width={480} height={480} />
          <Image src="/review/review4.jpg" alt="Review" width={480} height={480} />
          <Image src="/review/review5.jpg" alt="Review" width={480} height={480} />
          <Image src="/review/review6.jpg" alt="Review" width={480} height={480} />
  

          </div>
        </div>
        </div>

<hr />

        <div className="card-group"> 
  <div className="card">
 
  <div className="d-flex overflow-x-auto">
          <Image src="/review2/review (1).jpg" alt="Review" width={480} height={480} />
          <Image src="/review2/review (2).jpg" alt="Review" width={480} height={480} />
          <Image src="/review2/review (3).jpg" alt="Review" width={480} height={480} />
          <Image src="/review2/review (4).jpg" alt="Review" width={480} height={480} />
          <Image src="/review2/review (5).jpg" alt="Review" width={480} height={480} />
          <Image src="/review2/review (6).jpg" alt="Review" width={480} height={480} />
       

  

          </div>
        </div>
        
        </div>
    








 {/* ----------------------------------------------------- */}
 <div className="text-center">
<h5>รีวิวจากลูกค้าจริง ขอปรับงบเพิ่ม จาก5,000บาท/วัน เป็น 10,000 บาท/วัน</h5>
</div>





    </div>
   
    </>
  )
}
