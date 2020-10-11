import Text from "./Text";
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
    <div className="grid w-full grid-cols-2 gap-24 mb-12 md:grid-cols-2">
      <div className="w-full">
        <p className="mb-4 font-cursive text-2xl text-accent">{title}</p>
        <Text>{description}</Text>
        <a className="block mt-4 text-accent hover:underline" href={gitLink}>
          View on Github
        </a>
      </div>
      <video
        className="w-full m-auto"
        style={{ maxHeight: "32rem" }}
        src={videoSrc}
        autoPlay
        loop
        muted
        controls
      ></video>
    </div>
  );
}
