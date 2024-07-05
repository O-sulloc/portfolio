import React from 'react';
import ProjectCard from '../common/ProjectCard';
import thumb1 from '../../assets/proejct/thumb-1.png'

const Project = () => {
  return (
    <>
      <div className="project-section">
        <h1>project</h1>
        <div className='project-container'>
          <ProjectCard
            thumb={thumb1}
            title='Pet Service'
            desc='This project involves a web service that utilizes public data to provide information on the locations of veterinary clinics 
                  and grooming shops, while also offering real-time booking capabilities. 
                  Additionally, the service integrates the sale of pet-related products.'
            stacks='Java, SpringBoot, MySQL, AWS RDS, JavaScript'
            siteLink='https://gitgitgit.com'
            githubLink='https://github.com/O-sulloc/smart-pet/'
          >
          </ProjectCard>
          
          <ProjectCard
            thumb={thumb1}
            title='Pet Service'
            desc='This project involves a web service that utilizes public data to provide information on the locations of veterinary clinics 
                  and grooming shops, while also offering real-time booking capabilities. 
                  Additionally, the service integrates the sale of pet-related products.'
            stacks='Java, SpringBoot, MySQL, AWS RDS, JavaScript'
            siteLink='https://gitgitgit.com'
            githubLink='https://github.com/O-sulloc/smart-pet/'
          >
          </ProjectCard>
        </div>
      </div>
    </>
  )
}

export default Project;