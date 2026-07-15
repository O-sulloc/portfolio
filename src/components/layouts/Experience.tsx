import { useMemo } from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import ExperienceCard from '../common/ExperienceCard';
import { useTranslation } from 'react-i18next';
import enExperience from '../../locales/en/experience.json';
import koExperience from '../../locales/ko/experience.json';

const Experience = () => {
  const { t, i18n } = useTranslation();

  // 현재 언어에 맞는 experience 데이터를 가져옵니다
  // 배열 형태로 되어 있어서 바로 사용 가능 (이미 최신 항목이 먼저 오도록 정렬됨)
  const experienceData = useMemo(() => {
    return i18n.language === 'ko-KR' ? koExperience : enExperience;
  }, [i18n.language]);

  return (
    <>
      <div className="experience-section" id='experience-section'>
        <h1>{t("navbar:experience")}</h1>
        <VerticalTimeline
          animate={ true }
          className={ 'experience-timeline' }
          lineColor={ '#f8f9fa' }
        >
          {experienceData.map((item) => (
            <ExperienceCard
              key={`${item.company}-${item.date}`}
              type={item.type}
              title={item.title}
              companyName={item.company}
              desc={item.desc}
              stackList={item.stack}
              date={item.date}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default Experience;