interface HeroProps {
  title?: string;
  subtitle?: string;
  imgsrc?: string;
}
const Hero: React.FC<HeroProps> = ({ title, subtitle, imgsrc }) => (
  <>
    <div className="absolute z-0 w-full h-screen pointer-events-none from-dark to-accent bg-gradient-to-bl sm:bg-dark" />
    <div className="absolute z-10 flex items-center justify-center w-full h-screen pointer-events-none">
      {imgsrc && (
        <img
          className="absolute top-0 left-0 z-0 object-cover object-center w-screen h-screen border shadow-xl opacity-50 border-dark md:w-48 md:h-48 sm:rounded-none sm:m-0 md:mr-3"
          src={imgsrc}
          alt="profile picture"
        />
      )}
      <div className="z-10 flex flex-col text-center pointer-events-auto justify-evenly sm:m-0">
        <h1 className="font-serif text-6xl font-normal stroke-1 text-light md:text-4xl sm:text-4xl sm:text-light">
          {title}
        </h1>
        <h2 className="font-serif text-3xl text-light sm:text-primary md:text-2xl sm:text-2xl">
          {subtitle}
        </h2>
      </div>
    </div>
  </>
);
export default Hero;
