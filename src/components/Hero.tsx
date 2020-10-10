interface HeroProps {
  title?: string;
  subtitle?: string;
}
export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <>
      <div className="absolute z-0 w-full pointer-events-none bg-dark sm:h-screen h-screen/2">
        {/* <img src="/images/ep.png" alt="background" /> */}
      </div>
      <div className="absolute z-10 flex items-center justify-center w-full h-screen pointer-events-none">
        <div className="md:hidden">
          <img
            className="object-cover w-64 h-64 rounded-full shadow-xl"
            src="/images/profile.jpg"
            alt="profile picture"
          />
        </div>
        <div className="flex flex-col h-64 ml-12 pointer-events-auto justify-evenly sm:m-0">
          <h1 className="font-serif text-5xl font-normal text-light">
            {title}
          </h1>
          <h1 className="font-serif text-3xl font-normal text-dark sm:text-primary">
            {subtitle}
          </h1>
        </div>
      </div>
    </>
  );
}
