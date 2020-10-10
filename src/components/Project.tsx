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
    <div className="grid w-full grid-cols-6 gap-24 mb-12 md:grid-cols-2">
      <video
        className="w-full col-span-2 m-auto"
        src={videoSrc}
        loop
        muted
        controls
      ></video>
      <div className="w-full col-span-4">
        <p className="mb-4 font-serif text-2xl text-accent">{title}</p>
        <Text>{description}</Text>
        <a className="block mt-4 text-accent hover:underline" href={gitLink}>
          View on Github
        </a>
      </div>
    </div>
  );
}
