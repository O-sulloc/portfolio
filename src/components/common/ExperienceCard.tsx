import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { Stack } from '@mui/material';
import { Chip } from '@mui/material';

type ExperienceCardProps = {
  type: string,
  title: string,
  companyName: string,
  desc: string,
  stackList: string[],
  date: string,
}

const ExperienceCard = ({ type, title, companyName, desc, stackList, date }: ExperienceCardProps) => {
  const iconType = type === 'work' ? faBriefcase : faGraduationCap;
  const iconStyle = type === 'work' ? { background: 'rgb(102, 255, 255)', color: '#fff' } : 
    { background: 'rgb(102, 255, 102)', color: '#fff' }

  return (
    <VerticalTimelineElement
      className={`vertical-timeline-element--${type}`}
      date={ date }
      iconStyle={ iconStyle }
      icon={<FontAwesomeIcon icon={ iconType } />}
    >
      <h3 className='vertical-timeline-element-title'>{ title }</h3>
      <h5 className='vertical-timeline-element-subtitle'>{ companyName }</h5>
      <p>{ desc }</p>
      <Stack direction="row" spacing={0.5} className='stack-list-wrapper'>
        {stackList.map((stack) => (
          <Chip 
            className='stack-chip'
            key={stack}
            label={stack}
            sx={{ 
              textTransform: 'capitalize',
              '& .MuiChip-root': { margin: '10px' }
            }} 
          />
        ))}
      </Stack>
    </VerticalTimelineElement> 
  )
}

export default ExperienceCard;