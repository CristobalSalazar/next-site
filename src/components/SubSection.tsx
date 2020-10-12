interface SubSectionProps {
  title: string;
  children?: any;
}
export default function SubSection({ title, children }: SubSectionProps) {
  return (
    <div>
      <h4 className="mb-6 text text-muted sm:my-6 capitalize font-bold font-sans">
        {title}
      </h4>
      {children}
    </div>
  );
}
