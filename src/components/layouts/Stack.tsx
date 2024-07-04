import React from 'react';
import StackCard from '../common/StackCard';
import FullStackIcon from '../../assets/stacks/reactjs.png'
import DevOpsIcon from '../../assets/stacks/docker.png'

const Stack = () => {
  return (
    <>
      <section className="stack-section" id='stack'>
        <h1>stack</h1>
        <div className='stack-container'>
          <StackCard
            icon={FullStackIcon} 
            title={'Full Stack Web Development'} 
            desc={'I have built a diverse array of web applications from scratch using modern technologies such as Java and React.'}
            stackList={'Java, javascript'} 
            
          />

          <StackCard 
            icon={DevOpsIcon} 
            title={'DevOps'} 
            desc={'Experience with Docker, Kubernetes, and CI/CD pipelines.'}
            stackList={'Docker, Kubernetes, Jenkins'}
          />
        </div>

      </section>
    </>
  )
}

export default Stack;