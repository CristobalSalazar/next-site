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
    <div className="grid w-full grid-cols-2 gap-24 mb-12 text-left md:block sm:block">
      <div className="w-full">
        <p className="mb-4 text-2xl font-cursive text-accent">{title}</p>
        <Text>{description}</Text>
        <a
          className="block mt-4 text-accent hover:underline md:mb-12 sm:mb-12"
          href={gitLink}
        >
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
      ></video>
    </div>
  );
}
