import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/free-regular-svg-icons';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import StackChips from './StackChips';

type StackCardProps = {
  iconName: IconDefinition;
  title: string;
  desc: string;
  stackList: string[];
};

const StackCard = ({ iconName, title, desc, stackList }: StackCardProps) => {
  return (
    <div className="stack-wrapper">
      <FontAwesomeIcon icon={iconName} size="3x" className="stack-icon" />
      <h3 className="stack-title"> {title} </h3>
      <p className="stack-desc"> {desc} </p>
      <StackChips items={stackList} variant="outlined" />
    </div>
  );
};

export default StackCard;
