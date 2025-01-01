import React from 'react';
import ProjectCard from '../common/ProjectCard';
import first from '/assets/proejct/thumb-1.png'
import second from '/assets/proejct/thumb-2.png'
import third from '/assets/proejct/thumb-3.png'
import fourth from '/assets/proejct/jns.png'
import { useTranslation } from 'react-i18next';

type ProjectKey =  'first' | 'second' | 'third' | 'fourth';
const projectKeys: ProjectKey[] = ['first', 'second', 'third', 'fourth'];
const thumbMap: Record<ProjectKey, string> = { first, second, third, fourth };

const Project = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="project-section" id='project-section'>
        <h1>Project</h1>
        <div className='project-container'>
          {projectKeys.slice(0).reverse().map((key) => (
            <ProjectCard
              key={key}
              thumb={thumbMap[key]}
              title={t(`project:${key}:title`)}
              desc={t(`project:${key}:desc`)}
              stackList={t(`project:${key}:stackList`, {returnObjects: true}) as string[]}
              siteLink={t(`project:${key}:siteLink`)}
              githubLink={t(`project:${key}:githubLink`)}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Project;