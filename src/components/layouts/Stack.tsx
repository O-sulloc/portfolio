import React from 'react';
import StackCard from '../common/StackCard';
import { faJs, faAws, faJava } from '@fortawesome/free-brands-svg-icons';

const Stack = () => {
  return (
    <>
      <section className="stack-section" id='stack-section'>
        <h1>Stack</h1>
        <div className='stack-container'>
          <StackCard
            iconName={faJava} 
            title={'Backend Development'} 
            // desc={'Developed and maintained server-side applications using robust and scalable technologies, ensuring efficient data management and high-performance services'}x
            desc={'I have built a diverse array of web applications from scratch using modern technologies such as React and Flask. I have a strong proficiency in the SDLC process and frontend + backend development.'}
            stackList={['Ruby', 'Java', 'Node.js', 'Express', 'JPA', 'PostgreSQL', 'Oracle', 'MySQL']}
          />
          
          <StackCard
            iconName={faJs} 
            title={'Frontend Development'} 
            desc={'Implemented responsive and dynamic user interfaces with modern web technologies, enhancing user experience and interaction'}
            stackList={['JavaScript', 'TypeScript', 'React', 'Svelte', 'HTML5', 'CSS3', 'Material-UI', 'Bootstrap']}
          />

          <StackCard 
            iconName={faAws} 
            title={'DevOps'} 
            desc={'Streamlined the development process through automation, continuous integration, and continuous delivery using industry-standard tools and platforms'}
            stackList={['AWS', 'Docker', 'Kubernetes', 'Linux', 'Git', 'GitHub Actions', 'GitLab CI/CD']}
          />
        </div>

      </section>
    </>
  )
}

export default Stack;