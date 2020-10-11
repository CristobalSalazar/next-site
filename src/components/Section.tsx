interface SectionProps {
  children?: any;
  title: string;
}
export default function Section({ children, title }: SectionProps) {
  return (
    <section className="mb-12" id={title.toLowerCase()}>
      <h3 className="mb-6 text-2xl font-normal capitalize font-cursive text-accent sm:text-center">
        {title}
      </h3>
      {children}
    </section>
  );
}
