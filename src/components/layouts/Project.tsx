import React from 'react';
import ProjectCard from '../common/ProjectCard';
import thumb1 from '/assets/proejct/thumb-1.png'
import thumb2 from '/assets/proejct/thumb-2.png'
import jns from '/assets/proejct/jns.png'
import thumb3 from '/assets/proejct/thumb-3.png'

const Project = () => {
  return (
    <>
      <div className="project-section" id='project-section'>
        <h1>Project</h1>
        <div className='project-container'>
          <ProjectCard
            thumb={jns}
            title='Joseph & Stacey'
            desc='I developed and maintained the company’s ERP and e-commerce websites using Svelte, Ruby, and Linux, which enhanced overall system functionality and reliability. My role involved collaborating with various departments to create tailored ERP solutions that improved operational efficiency through the use of Agile methodologies and Scrum practices. I designed wireframes, created database schemas, and developed features in iterative sprints, accelerating delivery and optimizing team workflows. Additionally, I conducted comprehensive self-testing and troubleshooting for live issues, ensuring the system remained stable and user satisfaction was consistently achieved. I also worked closely with end-users to provide support and resolve technical issues, further enhancing the user experience. To facilitate a smoother onboarding process, I developed documentation to assist new team members in quickly integrating into the team and adapting to their roles.'
            stackList={['Ruby', 'Ruby On Rails', 'JavaScript', 'Svelte', 'PostgreSQL', 'Ubuntu(Linux)', 'Shopify']}
            siteLink='https://www.josephandstacey.com/'
            githubLink=''
          >
          </ProjectCard>

          <ProjectCard
            thumb={thumb3}
            title='Like Awesome Vegetable'
            desc='This project was developed as a team project during a bootcamp to create an online platform aimed at reducing food waste by facilitating the trade of imperfect vegetables. I was primarily responsible for implementing the real-time auction and contract management features, which included developing the auction closing logic and handling scenarios like bidding extensions and automatic win notifications. Additionally, I integrated an e-contract API (eFormSign) to facilitate secure and efficient digital transactions, reducing administrative overhead and enhancing user trust. I also contributed to the front-end development, creating an intuitive user interface to enhance engagement, using a server-side rendering (SSR) approach with Thymeleaf to ensure fast loading times and better SEO.'
            stackList={['Java', 'SpringBoot', 'MySQL', 'AWS', 'RESTful API', 'Oauth2', 'Thymeleaf', 'Bootstrap', 'GitHub', 'GitLab', 'Slack', 'Postman']} 
            siteLink=''
            githubLink='https://github.com/O-sulloc/like-awesome-vegetable'
          >
          </ProjectCard>

          <ProjectCard
            thumb={thumb2}
            title='Social Media Project'
            desc='This project is a social media web application designed to allow users to create accounts, sign in, post content, comment on posts, and interact with other users through a like system. The application communicates with the client-side using RESTful APIs and leverages JWT (JSON Web Token) for secure authentication and authorization. The backend is deployed on AWS EC2, containerized with Docker, and managed through GitLab CI/CD for continuous integration and deployment. Swagger is utilized for generating comprehensive API documentation automatically. Currently, I am enhancing the front-end using a client-side rendering (CSR) approach with React and TypeScript to improve interactivity and provide a more dynamic user experience.'
            stackList={['Java', 'SpringBoot', 'JWT', 'MySQL', 'Swagger', 'AWS EC2', 'Docker', 'GitLab CI/CD']}
            siteLink='http://ec2-3-36-59-252.ap-northeast-2.compute.amazonaws.com:8080/swagger-ui/'
            githubLink='https://github.com/O-sulloc/social-media-project'
          >
          </ProjectCard>

          <ProjectCard
            thumb={thumb1}
            title='Pet Service'
            desc='This project is a comprehensive web-based platform designed to connect pet owners with veterinary clinics and grooming services. The service allows users to browse a list of available pet service providers, view detailed information, and make real-time bookings. It integrates public data for accurate location-based service recommendations and provides users with a seamless booking experience. The platform also includes an admin interface for managing appointments, updating service offerings, and customizing reservation settings.'
            stackList={['Java', 'SpringBoot', 'MySQL', 'AWS RDS', 'JavaScript', 'JSP', 'AJAX', 'jQuery', 'Bootstrap']}
            siteLink=''
            githubLink='https://github.com/O-sulloc/smart-pet/'
          >
          </ProjectCard>
          
        </div>
      </div>
    </>
  )
}

export default Project;