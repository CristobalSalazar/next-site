import { Project } from "../dto/text.dto";
import { getRandomArrEl } from "../utils/array";

export interface ProjectReelProps {
  projects: Project[];
}
const ProjectReel: React.FC<ProjectReelProps> = ({ projects }) => {
  const randomProject = getRandomArrEl(projects);
  return (
    <>
      <video
        style={{ filter: "grayscale(100%)" }}
        src={randomProject.files[0].url}
        autoPlay={true}
        muted={true}
        loop
        className="absolute z-10 object-cover w-screen h-screen opacity-25"
      />
      <div className="z-20 flex flex-col h-screen py-12">
        <h1
          style={{ letterSpacing: "4ch" }}
          className="z-20 mb-6 text-4xl text-center uppercase text-light"
        >
          Projects
        </h1>
        <ul className="grid h-full grid-cols-6 mx-32 " id="projects">
          {projects.map((p) => (
            <li className="z-20 cursor-pointer bg-dark" key={p.title}>
              <video
                autoPlay={true}
                loop
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = "none";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = "grayscale(100%)";
                }}
                className="object-cover w-full h-full duration-200 rounded-lg"
                muted
                src={p.files[0].url}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default ProjectReel;
