import { Chip, Stack } from "@mui/material";
import React from "react";

type ProjectCardProps = {
  thumb: string,
  title: string,
  desc: string,
  stackList: string[],
  siteLink: string,
  githubLink: string,
}

const ProjectCard = ({ thumb, title, desc, stackList, siteLink, githubLink }: ProjectCardProps ) => {
  return (
    <div className="project-wrapper">
      <img src={thumb} className="project-thumb" />
      <h3 className="project-title">{title}</h3>
      <p className="project-desc">{desc}</p>
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
      <a href={siteLink} className="project-site-link">site link</a>
      <a href={githubLink} className="project-github-link">github link</a>
    </div>
  )
}

export default ProjectCard;