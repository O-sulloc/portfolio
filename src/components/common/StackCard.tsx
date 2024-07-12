import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/free-regular-svg-icons'
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';

type StackCardProps = {
  iconName: IconDefinition,
  title: string,
  desc: string,
  stackList: string,
}

const StackCard = ({ iconName, title, desc, stackList }: StackCardProps) => {
  return (
    <div className='stack-wrapper'>
      <FontAwesomeIcon icon={iconName} size='3x' className='stack-icon' />
      <h3 className='stack-title'> {title} </h3>
      <p className='stack-desc'> {desc} </p>
      <span className='stack-list'> {stackList} </span>
    </div>
  )
}

const stackFirst = [
  "Ruby",
  "Ruby On Rails",
  "Java",
  "Spring Boot",
  "JavaScript",
  "TypeScript",
  "Svelte",
  "React",
  "Oracle",
  "MySQL",
  "PostgreSQL",
  "Postman"
]

const StackSecond = [
  "Git",
  "GitHub Actions",
  "GitLab CI/CD",
  "AWS",
  "Docker",
  "Kubernetes",
  "Linux",
]

export default StackCard;