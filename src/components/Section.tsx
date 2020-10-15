import { FC } from "react";

interface SectionProps {
  title: string;
}
const Section: FC<SectionProps> = ({ children, title }) => {
  return (
    <section className="py-12 sm:px-3 sm:border-b sm:border-muted">
      <h3 className="mb-6 font-serif text-2xl font-bold text-black capitalize sm:text-center sm:text-3xl ">
        {title}
      </h3>
      {children}
    </section>
  );
};
export default Section;
