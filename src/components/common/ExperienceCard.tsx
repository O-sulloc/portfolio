import { useState } from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@mui/material/styles';
import StackChips from './StackChips';
import ExperienceCaseStudy, { type CaseStudyData } from './ExperienceCaseStudy';

type ExperienceCardProps = {
  type: string;
  title: string;
  companyName: string;
  desc: string;
  stackList: string[];
  date: string;
  caseStudies?: CaseStudyData[];
};

const ExperienceCard = ({
  type,
  title,
  companyName,
  desc,
  stackList,
  date,
  caseStudies,
}: ExperienceCardProps) => {
  const theme = useTheme();
  const { surface, timeline } = theme.palette;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const iconType = type === 'work' ? faBriefcase : faGraduationCap;
  const iconStyle = {
    background: type === 'work' ? timeline.work : timeline.education,
    color: '#fff',
  };

  return (
    <VerticalTimelineElement
      className={`vertical-timeline-element--${type}`}
      date={date}
      iconStyle={iconStyle}
      icon={<FontAwesomeIcon icon={iconType} />}
      contentStyle={{ background: surface.main, color: 'black' }}
      contentArrowStyle={{ borderRight: `7px solid ${surface.main}` }}
    >
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h5 className="vertical-timeline-element-subtitle">{companyName}</h5>
      <p dangerouslySetInnerHTML={{ __html: desc }} />
      <StackChips items={stackList} />

      {caseStudies && caseStudies.length > 0 && (
        <div className="cs-teasers">
          {caseStudies.length > 1 && (
            <p className="cs-teasers__bridge">
              Two halves of one system — the site that captures demand, and the Odoo backend it runs on.
            </p>
          )}
          <div className="cs-teasers__grid">
            {caseStudies.map((cs, i) => (
              <button
                key={cs.teaserTitle ?? i}
                type="button"
                className="cs-teaser"
                onClick={() => setOpenIndex(i)}
                aria-haspopup="dialog"
              >
                {cs.cover ? (
                  <img
                    className="cs-teaser__thumb"
                    src={cs.cover}
                    alt={`${cs.teaserTitle ?? companyName} preview`}
                    loading="lazy"
                  />
                ) : (
                  <span className="cs-teaser__thumb cs-teaser__thumb--diagram" aria-hidden="true">
                    <span>{cs.teaserTitle ?? 'Case study'}</span>
                  </span>
                )}
                <span className="cs-teaser__body">
                  {cs.teaserTitle && <span className="cs-teaser__title">{cs.teaserTitle}</span>}
                  {cs.teaserBlurb && <span className="cs-teaser__blurb">{cs.teaserBlurb}</span>}
                  <span className="cs-teaser__cta">View case study →</span>
                </span>
              </button>
            ))}
          </div>
          {caseStudies.map((cs, i) => (
            <ExperienceCaseStudy
              key={cs.teaserTitle ?? i}
              open={openIndex === i}
              onClose={() => setOpenIndex(null)}
              title={cs.teaserTitle ?? title}
              companyName={companyName}
              date={date}
              data={cs}
            />
          ))}
        </div>
      )}
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
