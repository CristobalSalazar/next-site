interface SubSectionProps {
  title: string;
  children?: any;
}
export default function SubSection({ title, children }: SubSectionProps) {
  return (
    <div>
      <h2 className="sub-heading">{title}</h2>
      {children}
    </div>
  );
}
