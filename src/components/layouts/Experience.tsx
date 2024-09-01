import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import ExperienceCard from '../common/ExperienceCard';

const Experience = () => {
  return (
    <>
      <div className="experience-section" id='experience-section'>
        <h1>Experience</h1>
        <VerticalTimeline
          animate={ true }
          className={ 'experience-timeline' }
          lineColor={ '#f8f9fa' }
        >
          <ExperienceCard 
            type='work' 
            title='Full Stack Web Developer' 
            companyName='Joseph & Stacey | Digital Experience Team' 
            desc=''
            stackList={['Ruby', 'Ruby On Rails', 'JavaScript', 'Svelte', 'PostgreSQL', 'Ubuntu(Linux)', 'Shopify']}
            date='2023-2024'
          />
          <ExperienceCard 
            type='education' 
            title='Java Full Stack Bootcamp Cource' 
            companyName='LikeLion' 
            desc='An intensive bootcamp focusing on full stack development with Java and modern frameworks'
            stackList={['Java', 'Spring Security', 'JPA', 'Docker', 'Kubernetes', 'AWS EC2', 'MySQL', 'JWT', 'JUnit', 'Gradle', 'Thymeleaf', 'Postman', 'Swagger']}
            date='2022-2023'
          />
          <ExperienceCard 
            type='education' 
            title='Java Full Stack Bootcamp Cource' 
            companyName='SSangyong Institute of System Technology' 
            desc='A comprehensive bootcamp covering full stack development using Java and associated technologies'
            stackList={['Java', 'Spring', 'Spring Boot', 'AWS RDS', 'MyBatis', 'Oracle', 'JSP', 'jQuery', 'Ajax', 'Bootstrap', 'Apache Tomcat', 'Maven', 'Heroku']}
            date='2021-2021'
          />
        </VerticalTimeline>
      </div>
    </>
  )
}

export default Experience;