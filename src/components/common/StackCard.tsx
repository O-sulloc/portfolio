import React from 'react';

type StackCardProps = {
  icon: string,
  title: string,
  desc: string,
  stackList: string,
}

const StackCard = ({ icon, title, desc, stackList }: StackCardProps) => {
  return (
    <div className='stack-wrapper'>
      <img src={icon} className='stack-icon' />
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