import { Project } from "../dto/text.dto";

export interface ProjectReelProps {
  projects: Project[];
  featured: Project;
}
const ProjectReel: React.FC<ProjectReelProps> = ({ projects, featured }) => (
  <>
    <video
      style={{ filter: "grayscale(100%)" }}
      src={featured.files[0]?.url}
      autoPlay={true}
      muted={true}
      loop
      className="absolute z-0 object-cover w-screen h-screen min-h-screen overflow-hidden opacity-25 sm:hidden"
    />
    <div className="z-20 flex flex-col h-screen min-h-screen py-12 sm:py-0">
      <h1
        style={{ letterSpacing: "4ch" }}
        className="z-20 mb-6 text-4xl text-center uppercase sm:text-xl text-light"
      >
        Projects
      </h1>
      <ul
        className="grid h-full grid-cols-6 mx-32 sm:block sm:mx-0"
        id="projects"
      >
        {projects.map((p) => (
          <li className="z-20 rounded-lg cursor-pointer bg-dark" key={p.title}>
            <video
              autoPlay={true}
              loop
              className="object-cover w-full h-full transition-opacity duration-300 hover:opacity-25"
              muted
              src={p.files[0]?.url || ""}
            />
          </li>
        ))}
      </ul>
    </div>
  </>
);
export default ProjectReel;
