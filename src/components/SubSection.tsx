interface SubSectionProps {
  title: string;
  children?: any;
}
export default function SubSection({ title, children }: SubSectionProps) {
  return (
    <div>
      <h2 className="mb-8 text-lg text-center text-dark text-muted sm:text-left sm:my-6 sm:ml-4 sm:w-full">
        {title}
      </h2>
      {children}
    </div>
  );
}
