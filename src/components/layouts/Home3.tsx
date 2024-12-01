import React from 'react';
import me from '/assets/me.png';
import 'animate.css';
import { IconButton } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';

import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className='blob-first'></div>
      <div className='blob-second'></div>
      <section className="home" id='home-section'>

        <div className='information'>
          <div className='name-wrapper'>
            <h1 className='home-name animate__animated animate__fadeInUp'>
              {/* Jeonghyeon Kim */}
              {t("home:name")}
            </h1>
          </div>

          <div className='home-brief'>
            <div className='title animate__animated animate__fadeInRight'>
              <p>{t("home:desc")}</p>
            </div>

            <div className='image-wrapper animate__animated animate__fadeInUp'>
              <div className='social-icon animate__animated animate__fadeInDown'>
                <IconButton aria-label='github' sx={{ "&:hover": { color: "black" } }} href='https://github.com/O-sulloc'>
                  <GitHub fontSize="large" />
                </IconButton>
                <IconButton aria-label='linkedin' sx={{ "&:hover": { color: "blue" } }} href='https://www.linkedin.com/in/jeonghyeon-kim-11b874202/'>
                  <LinkedIn fontSize="large" />
                </IconButton>
              </div>
              
              <img src={me} className='home-image'/>
            </div>

            <div className='location animate__animated animate__fadeInLeft'>
              <p>{t("home:location")}</p>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Home;