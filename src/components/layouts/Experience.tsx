import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import ExperienceCard from '../common/ExperienceCard';
import { useTranslation } from 'react-i18next';

type ExperienceKey =  'first' | 'second' | 'third';
const experienceKeys: ExperienceKey[] = ['first', 'second', 'third'];

const Experience = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="experience-section" id='experience-section'>
        <h1>Experience</h1>
        <VerticalTimeline
          animate={ true }
          className={ 'experience-timeline' }
          lineColor={ '#f8f9fa' }
        >
          {experienceKeys.slice(0).reverse().map((key) => (
            <ExperienceCard
              key={key}
              type={t(`experience:${key}:type`)}
              title={t(`experience:${key}:title`)}
              companyName={t(`experience:${key}:company`)}
              desc={t(`experience:${key}:desc`)}
              stackList={t(`experience:${key}:stack`, {returnObjects: true}) as string[]}
              date={t(`experience:${key}:date`)}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default Experience;