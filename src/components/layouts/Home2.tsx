import React from 'react';
import homeImage from '/assets/home-image.png';

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="home-left">
          <h1>
            <span>Hello! I'm Jeonghyeon Kim</span>
            <br/>
            <span>Full-Stack Developer</span>
          </h1>
          <div className="home-left-down">
            <span>
              I'm a Full Stack Developer with one year of working experience in the industry. < br/>
              I’m passionate about creating user interfaces, web applications, and continuously growing in the industry.
            </span>
            {/* <span>Continuously growing, proactively seeking feedback and being a team player.</span> */}
          </div>
        </div>
        <div className="home-right">
          <img src={homeImage} alt="HomeImage" />
        </div>
      </section>
    </>
  )
}

export default Home;