interface ProjectProps {
  videoSrc: string;
  title: string;
  description: string;
  gitLink: string;
}

export default function Project({
  videoSrc,
  title,
  description,
  gitLink,
}: ProjectProps) {
  return (
    <div className="project">
      <video
        className="project-video"
        src={videoSrc}
        loop
        muted
        controls
      ></video>
      <div className="project-text">
        <p className="project-title">{title}</p>
        <p className="project-description">{description}</p>
        <a className="project-link" href={gitLink}>
          View on Github
        </a>
      </div>
    </div>
  );
}
