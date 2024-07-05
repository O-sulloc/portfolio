import React from "react";

type ProjectCardProps = {
  thumb: string,
  title: string,
  desc: string,
  stacks: string,
  siteLink: string,
  githubLink: string,
}

const ProjectCard = ({ thumb, title, desc, stacks, siteLink, githubLink }: ProjectCardProps ) => {
  return (
    <div className="project-wrapper">
      <img src={thumb} className="project-thumb" />
      <h3 className="project-title">{title}</h3>
      <p className="project-desc">{desc}</p>
      <p className="project-stacks">{stacks}</p>
      <a href={siteLink} className="project-site-link">site link</a>
      <a href={githubLink} className="project-github-link">github link</a>
    </div>
  )
}

export default ProjectCard;