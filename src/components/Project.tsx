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
        <p className="mb-6 text-2xl text-primary">{title}</p>
        <Text>
          <div className="text-secondary">{description}</div>
        </Text>
        <a
          className="block mt-4 text-primary italic font-sans underline font-normal text-sm md:mb-12 sm:mb-12"
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
