import { title } from "process";

interface PortfolioSectionProps {
  children: any;
  title: string;
}
export default function PortfolioSection({
  title,
  children,
}: PortfolioSectionProps) {
  return (
    <section
      className="font-cursive md:text-center sm:text-center"
      id={title.toLowerCase()}
    >
      <h2 className="mb-12 text-3xl text-dark">{title}</h2>
      <div className="flex flex-wrap justify-center m-auto">{children}</div>
    </section>
  );
}
