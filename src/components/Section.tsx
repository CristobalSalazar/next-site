import { FC } from "react";

interface SectionProps {}
const Section: FC<SectionProps> = ({ children }) => {
  return (
    <section className="sm:py-6 sm:px-3 sm:border-b sm:border-muted">
      {children}
    </section>
  );
};
export default Section;
