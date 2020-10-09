import PopList from "./PopList";
import Section from "./Section";

interface EducationProps {}
export default function Education() {
  return (
    <Section title="Education">
      <PopList
        items={[
          "Certificate in Web Development, University of Toronto",
          "Bachelor of Music, Humber College",
          "Diploma in Music Performance, Mount Royal University",
        ]}
      />
    </Section>
  );
}
