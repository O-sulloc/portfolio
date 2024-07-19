import React from 'react';
import me from '../../assets/me.png';
import { GitHub } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const Home = () => {
  return (
    <>
      <section className="home-section" id='home-section'>{/* 여기에 뒷배경 들어감 */}
        <div className="image-wrapper">
          <img src={me} className='home-image'/>
        </div>
        <div className="content">
          <div className='social-icon'>
            <IconButton aria-label='github' sx={{ "&:hover": { color: "black" } }} href='https://github.com/O-sulloc'>
              <GitHub fontSize="large" />
              {/* <GitHub fontSize='large'/> */}
            </IconButton>
            <IconButton aria-label='linkedin' sx={{ "&:hover": { color: "blue" } }} href='https://www.linkedin.com/in/jeonghyeon-kim-11b874202/'>
              <LinkedIn fontSize="large" />
            </IconButton>
          </div>
          <h1>Jeonghyeon Kim</h1>
          <p>Full Stack Engineer</p>
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