import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import ExperienceCard from '../common/ExperienceCard';

const Experience = () => {
  return (
    <>
      <div className="experience-section" id='experience-section'>
        <h1>experience</h1>
        <VerticalTimeline
          animate={ true }
          className={ 'experience-timeline' }
        >
          <ExperienceCard 
            type='work' 
            title='Web Devlopment' 
            companyName='Joseph&Stacey' 
            desc='ERP Development'
            stackList='Ruby, Svelte, PostgreSQL, Linux'
            date='2023-2024'
          />
          <ExperienceCard 
            type='education' 
            title='Java Full Stack Bootcamp Cource' 
            companyName='LikeLion' 
            desc=''
            stackList='Java, JPA, Docker'
            date='2022-2023'
          />
        </VerticalTimeline>
      </div>
    </>
  )
}

export default Experience;