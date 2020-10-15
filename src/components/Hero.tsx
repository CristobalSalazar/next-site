interface HeroProps {
  title?: string;
  subtitle?: string;
  imgsrc?: string;
}
const Hero: React.FC<HeroProps> = ({ title, subtitle, imgsrc }) => (
  <>
    <div className="absolute z-0 w-full pointer-events-none bg-secondary sm:bg-dark sm:h-screen h-screen/2" />
    <div className="absolute z-10 flex items-center justify-center w-full h-screen pointer-events-none">
      {imgsrc && (
        <img
          className="object-cover w-64 h-64 mr-12 border-2 rounded-full shadow-xl border-dark md:w-48 md:h-48 sm:h-screen sm:w-screen sm:absolute sm:left-0 sm:top-0 sm:z-0 sm:opacity-25 sm:rounded-none sm:m-0 md:mr-3"
          src={imgsrc}
          alt="profile picture"
        />
      )}
      <div className="flex flex-col h-64 pointer-events-auto justify-evenly sm:m-0">
        <h1 className="font-serif text-5xl font-normal text-dark md:text-4xl sm:text-4xl sm:text-light">
          {title}
        </h1>
        <h2 className="font-serif text-3xl text-dark sm:text-primary md:text-2xl sm:text-2xl">
          {subtitle}
        </h2>
      </div>
    </div>
  </>
);
export default Hero;
