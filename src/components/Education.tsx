import PopList from "./PopList";
import Section from "./Section";

interface EducationProps {
  items: string[];
}
export default function Education({ items }: EducationProps) {
  return (
    <>
      {items.length > 0 && (
        <Section title="Education">
          <PopList items={items} />
        </Section>
      )}
    </>
  );
}
