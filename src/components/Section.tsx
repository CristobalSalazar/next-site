interface SectionProps {
  children?: any;
  title: string;
}
export default function Section({ children, title }: SectionProps) {
  return (
    <section id={title.toLowerCase()}>
      <h3 className="font-cursive my-8 text-2xl font-normal capitalize text-accent text-sans">
        {title}
      </h3>
      {children}
    </section>
  );
}
