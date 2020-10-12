import { FC } from "react";

interface SectionProps {
  title: string;
}
const Section: FC<SectionProps> = ({ children, title }) => {
  return (
    <section className="py-12 sm:px-3 sm:border-b sm:border-muted">
      <h3 className="mb-6 text-2xl capitalize font-cursive text-accent sm:text-center sm:text-3xl ">
        {title}
      </h3>
      {children}
    </section>
  );
};
export default Section;
