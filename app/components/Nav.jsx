import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Line from './line.';

function Nav() {
  return (
    <>
    <div className='linecut'></div>
      <nav className="navbar navbar-expand-lg " id='nav'>
  <div className="container-fluid">
    <Link className="navbar-brand" href="/line">
    
    <Image src="/img/logo.png" alt="Favicon" width={60} height={60} />


    
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-linkactive mx-2" aria-current="page" href="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-linkactive mx-2" href="/Facebook">Facebook</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-linkactive mx-2" href="/Google">Google</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-linkactive mx-2" href="/Course-Google">คอร์สโฆษณาGoogle</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-linkactive mx-2" href="/Course-Facebook">คอร์สโฆษณาFacebook</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-linkactive mx-2" href="/Interesting">สาระน่ารู้</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-linkactive mx-2" href="/Contact">ข้อมูลติดต่อเรา</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-linkactive mx-2" href="/Reviews">รีวิวจากลูกค้าจริง</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-linkactive mx-2" href="/DowloadsGoogle">LandingPage Googleฟรี</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-linkactive mx-2" href="/DowloadsFacebook">LandingPage Facebookฟรี</Link>
        </li>
      </ul>
      <span className="navbar-text">
      <Link className="line" href="/line">
    
    <Image src="/img/line.gif" alt="Favicon" width={150} height={35} />
    </Link>
   
      </span>
    </div>
  </div>
</nav>
<div className='linecut'></div>
<Line/>
    </>
  )
}

export default Nav
