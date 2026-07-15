import { useMemo } from 'react';
import ProjectCard from '../common/ProjectCard';
import { useTranslation } from 'react-i18next';
import enProject from '../../locales/en/project.json';
import koProject from '../../locales/ko/project.json';

const Project = () => {
  const { t, i18n } = useTranslation();

  // 현재 언어에 맞는 project 데이터를 가져옵니다
  // 배열 형태로 되어 있어서 바로 사용 가능 (이미 최신 항목이 먼저 오도록 정렬됨)
  const projectData = useMemo(() => {
    return i18n.language === 'ko-KR' ? koProject : enProject;
  }, [i18n.language]);

  return (
    <>
      <div className="project-section" id='project-section'>
        <h1>{t("navbar:project")}</h1>
        <div className='project-container'>
          {projectData.map((item) => (
            <ProjectCard
              key={item.title}
              thumb={item.image}
              title={item.title}
              desc={item.desc}
              stackList={item.stackList}
              siteLink={item.siteLink}
              githubLink={item.githubLink}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Project;