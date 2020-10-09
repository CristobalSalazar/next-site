import PopList from "./PopList";
import Section from "./Section";
import SubSection from "./SubSection";

interface SkillsProps {}
export default function Skills() {
  return (
    <Section title="skills">
      <div className="col-3 grid-gap-6">
        <SubSection title="Frameworks and Libs">
          <PopList
            items={[
              "Node js",
              "Next js",
              "Nest js",
              "Electron",
              "React",
              "React Native",
              "Flutter",
              "Tailwind",
              "Bootstrap",
              "jQuery",
            ]}
          />
        </SubSection>
        <SubSection title="Languages and Tools">
          <PopList
            items={[
              "Typescript / Javascript",
              "C#",
              "Dart",
              "CSS / SASS / LESS",
              "HTML",
              "Docker",
              "Mongodb",
              "MySQL",
              "Firebase",
              "Bash",
              "AWS",
            ]}
          />
        </SubSection>
        <SubSection title="Spoken Languages">
          <PopList items={["English", "French", "Spanish"]} />
        </SubSection>
      </div>
    </Section>
  );
}
