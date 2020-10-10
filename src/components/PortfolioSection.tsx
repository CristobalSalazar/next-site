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
      className="m-auto md:m-4 sm:overflow-hidden"
      id={title.toLowerCase()}
    >
      <h1 className="my-8 text-3xl text-muted">{title}</h1>
      <div className="flex flex-wrap justify-center m-auto">{children}</div>
    </section>
  );
}
