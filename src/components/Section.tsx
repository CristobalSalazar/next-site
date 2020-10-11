interface SectionProps {
  children?: any;
  title: string;
}
export default function Section({ children, title }: SectionProps) {
  return (
    <section id={title.toLowerCase()}>
      <h3 className="my-8 text-2xl font-normal capitalize font-cursive text-accent sm:text-center">
        {title}
      </h3>
      {children}
    </section>
  );
}
