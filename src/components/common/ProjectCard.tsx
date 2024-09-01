import { Chip, IconButton, Stack } from "@mui/material";
import React from "react";
import { GitHub } from '@mui/icons-material';
import { WebAsset } from '@mui/icons-material';

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
      <div className="project-content">
        <div>
          {siteLink ? (
            <a href={siteLink}>
              <img src={thumb} className="project-thumb" />
            </a>
          ) : (
            <a href={githubLink}>
              <img src={thumb} className="project-thumb" />
            </a>
          )}
        </div>
        
        <div className="project-body">
          <h3 className="project-title">{title}</h3>
          <p className="project-desc">{desc}</p>
          <Stack direction="row" className='stack-list-wrapper'>
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
          <div className="project-links">
            {/* if githubLink is empty, hide the github button */}
            {githubLink && (
              <IconButton aria-label='github' sx={{ "&:hover": { color: "black" } }} href={githubLink}>
                <GitHub />
              </IconButton>
            )}
            {/* if siteLink is empty, hide the site button */}
            {siteLink && (
              <IconButton aria-label='site' sx={{ "&:hover": { color: "black" } }} href={siteLink}>
                <WebAsset />
              </IconButton>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProjectCard;