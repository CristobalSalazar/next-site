interface SubSectionProps {
  title: string;
  children?: any;
}
export default function SubSection({ title, children }: SubSectionProps) {
  return (
    <div>
      <h4 className="mb-6 text text-accent sm:my-6 font-serif">{title}</h4>
      {children}
    </div>
  );
}
