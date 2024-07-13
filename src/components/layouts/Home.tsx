import React from 'react';
import me from '../../assets/me.png';
import { GitHub } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';

const Home = () => {
  return (
    <>
      <section className="home-section" id='home-section'>{/* 여기에 뒷배경 들어감 */}
        <div className="image-wrapper">
          <img src={me} className='home-image'/>
        </div>
        <div className="content">
          <div className='social-icon'>
            <a><GitHub fontSize='large'/></a>
            <a><LinkedIn fontSize='large' /></a>
          </div>
          <h1>Jeonghyeon Kim</h1>
          <p>Full Stack Developer</p>
          {/* <div className='mobile-social-icon'>
            <a>github</a>
            <a>linkedlin</a>
          </div> */}
        </div>
      </section>
    </>
  )
}

export default Home;