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
            desc='This project involves a web service that utilizes public data to provide information on the locations of veterinary clinics 
                  and grooming shops, while also offering real-time booking capabilities. 
                  Additionally, the service integrates the sale of pet-related products.'
            stackList={['Java', 'SpringBoot', 'MySQL', 'AWS RDS', 'JavaScript']}
            siteLink='https://gitgitgit.com'
            githubLink='https://github.com/O-sulloc/smart-pet/'
          >
          </ProjectCard>
          
          <ProjectCard
            thumb={thumb2}
            title='Social Media Project'
            desc='This project is a social media service backend application. 
                  It includes key features such as user management (registration and login), post creation and retrieval, 
                  comments functionality, and a like system. 
                  The application communicates with client-side applications through RESTful APIs and uses JWT (JSON Web Token) for authentication 
                  and authorization. 
                  It is built with Spring Boot and uses MySQL for database management. 
                  The project is deployed on AWS EC2 and utilizes Swagger for automatic API documentation generation.'
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