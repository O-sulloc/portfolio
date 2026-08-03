import { IconButton } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import { WebAsset } from '@mui/icons-material';
import StackChips from './StackChips';

type ProjectCardProps = {
  thumb: string;
  title: string;
  desc: string;
  stackList: string[];
  siteLink: string;
  githubLink: string;
};

const ProjectCard = ({ thumb, title, desc, stackList, siteLink, githubLink }: ProjectCardProps) => {
  // 라이브 사이트를 우선하고, 없으면 저장소로. 둘 다 없는 경우
  // href=""인 앵커는 페이지를 새로고침해버리므로 감싸지 않습니다.
  const thumbLink = siteLink || githubLink;
  const thumbImg = <img src={thumb} className="project-thumb" alt={title} />;

  return (
    <div className="project-wrapper">
      <div className="project-content">
        <div>{thumbLink ? <a href={thumbLink}>{thumbImg}</a> : thumbImg}</div>

        <div className="project-body">
          <h3 className="project-title">{title}</h3>
          <p className="project-desc">{desc}</p>
          <StackChips items={stackList} />
          <div className="project-links">
            {/* if githubLink is empty, hide the github button */}
            {githubLink && (
              <IconButton aria-label="github" href={githubLink}>
                <GitHub />
              </IconButton>
            )}
            {/* if siteLink is empty, hide the site button */}
            {siteLink && (
              <IconButton aria-label="site" href={siteLink}>
                <WebAsset />
              </IconButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
