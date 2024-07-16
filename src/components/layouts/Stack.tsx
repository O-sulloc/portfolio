import React from 'react';
import StackCard from '../common/StackCard';
import { faJs, faAws, faGitAlt } from '@fortawesome/free-brands-svg-icons';

const Stack = () => {
  return (
    <>
      <section className="stack-section" id='stack-section'>
        <h1>stack</h1>
        <div className='stack-container'>
          <StackCard
            iconName={faJs} 
            title={'Full Stack Web Development'} 
            desc={'I have built a diverse array of web applications from scratch using modern technologies such as Java and React.'}
            // stackList={['Java', 'JavaScript', 'Ruby', 'postgreSQL',]}
            stackList={['Java', 'JavaScript', 'Ruby', 'postgreSQL', 'oracle', 'mySQL', 'Kubernetes', 'jenkins']}
          />
          
          <StackCard
            iconName={faJs} 
            title={'Full Stack Web Development'} 
            desc={'I have built a diverse array of web applications from scratch using modern technologies such as Java and React.'}
            stackList={['Java', 'JavaScript', 'Ruby', 'postgreSQL', 'oracle', 'mySQL', 'Kubernetes', 'jenkins']}
          />

          <StackCard 
            iconName={faAws} 
            title={'DevOps'} 
            desc={'Experience with Docker, Kubernetes, and CI/CD pipelines.'}
            stackList={['Java', 'JavaScript', 'Ruby', 'postgreSQL', 'oracle', 'mySQL', 'Kubernetes', 'jenkins']}
          />
        </div>

      </section>
    </>
  )
}

export default Stack;