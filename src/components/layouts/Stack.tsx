import React from 'react';
import StackCard from '../common/StackCard';
import { faJs, faAws, faGitAlt } from '@fortawesome/free-brands-svg-icons';

const Stack = () => {
  return (
    <>
      <section className="stack-section" id='stack'>
        <h1>stack</h1>
        <div className='stack-container'>
          <StackCard
            iconName={faJs} 
            title={'Full Stack Web Development'} 
            desc={'I have built a diverse array of web applications from scratch using modern technologies such as Java and React.'}
            stackList={'Java, javascript'} 
            
          />

          <StackCard 
            iconName={faAws} 
            title={'DevOps'} 
            desc={'Experience with Docker, Kubernetes, and CI/CD pipelines.'}
            stackList={'Docker, Kubernetes, Jenkins'}
          />

          <StackCard 
            iconName={faGitAlt} 
            title={'others'} 
            desc={'Experience with Docker, Kubernetes, and CI/CD pipelines.'}
            stackList={'Docker, Kubernetes, Jenkins'}
          />
        </div>

      </section>
    </>
  )
}

export default Stack;