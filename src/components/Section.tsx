interface SectionProps {
  children?: any;
  title: string;
  className?: string;
}
export default function Section({ children, title, className }: SectionProps) {
  return (
    <section
      className={`mb-12 sm:px-6 sm:py-12 sm:rounded-b-lg ${className}`}
      id={title.toLowerCase()}
    >
      <h3 className="mb-6 text-2xl font-normal capitalize font-cursive text-accent sm:text-center">
        {title}
      </h3>
      {children}
    </section>
  );
}
