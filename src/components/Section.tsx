interface SectionProps {
  children?: any;
  title: string;
}
export default function Section({ children, title }: SectionProps) {
  return (
    <section id={title.toLowerCase()}>
      <h2 className="heading">{title}</h2>
      {children}
    </section>
  );
}
