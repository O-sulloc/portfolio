import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@mui/material/styles';
import StackChips from './StackChips';

type ExperienceCardProps = {
  type: string;
  title: string;
  companyName: string;
  desc: string;
  stackList: string[];
  date: string;
};

const ExperienceCard = ({
  type,
  title,
  companyName,
  desc,
  stackList,
  date,
}: ExperienceCardProps) => {
  const theme = useTheme();
  const { surface, timeline } = theme.palette;

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
      <p>{desc}</p>
      <StackChips items={stackList} />
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
