interface SubSectionProps {
  title: string;
  children?: any;
}
export default function SubSection({ title, children }: SubSectionProps) {
  return (
    <div>
      <h4 className="my-8 text-lg text-center text-muted sm:my-6">{title}</h4>
      {children}
    </div>
  );
}
