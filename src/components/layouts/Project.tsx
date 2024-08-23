import React from 'react';
import ProjectCard from '../common/ProjectCard';
import thumb1 from '/assets/proejct/thumb-1.png'
import thumb2 from '/assets/proejct/thumb-2.png'

const Project = () => {
  return (
    <>
      <div className="project-section" id='project-section'>
        <h1>Project</h1>
        <div className='project-container'>
          <ProjectCard
            thumb={thumb1}
            title='Pet Service'
            desc='This project is a comprehensive web-based platform designed to connect pet owners with veterinary clinics and grooming services. The service allows users to browse a list of available pet service providers, view detailed information, and make real-time bookings. It integrates public data for accurate location-based service recommendations and provides users with a seamless booking experience. The platform also includes an admin interface for managing appointments, updating service offerings, and customizing reservation settings.'
            stackList={['Java', 'SpringBoot', 'MySQL', 'AWS RDS', 'JSP', 'AJAX', 'JavaScript', 'JSP']}
            siteLink=''
            githubLink='https://github.com/O-sulloc/smart-pet/'
          >
          </ProjectCard>
          
          <ProjectCard
            thumb={thumb2}
            title='Social Media Project'
            desc='This project is a social media web application designed to allow users to create accounts, sign in, post content, comment on posts, and interact with other users through a like system. The application communicates with the client-side using RESTful APIs and leverages JWT (JSON Web Token) for secure authentication and authorization. The backend is deployed on AWS EC2, containerized with Docker, and managed through GitLab CI/CD for continuous integration and deployment. Swagger is utilized for generating comprehensive API documentation automatically.'
            stackList={['Java', 'SpringBoot', 'MySQL', 'JWT', 'Swagger', 'AWS EC2', 'Docker', 'GitLab CI/CD']}
            siteLink='http://ec2-3-36-59-252.ap-northeast-2.compute.amazonaws.com:8080/swagger-ui/'
            githubLink='https://github.com/O-sulloc/social-media-project'
          >
          </ProjectCard>
        </div>
      </div>
    </>
  )
}

export default Project;