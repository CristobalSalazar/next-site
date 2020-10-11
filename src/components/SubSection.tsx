interface SubSectionProps {
  title: string;
  children?: any;
}
export default function SubSection({ title, children }: SubSectionProps) {
  return (
    <div>
      <h4 className="mb-6 text-lg text-center text-dark sm:my-6">{title}</h4>
      {children}
    </div>
  );
}
