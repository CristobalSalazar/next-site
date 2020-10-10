interface SectionProps {
  children?: any;
  title: string;
}
export default function Section({ children, title }: SectionProps) {
  return (
    <section id={title.toLowerCase()}>
      <h2 className="my-8 font-serif text-2xl font-normal capitalize text-accent text-sans">
        {title}
      </h2>
      {children}
    </section>
  );
}
