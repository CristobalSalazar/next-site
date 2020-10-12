import PopList from "./PopList";
import Section from "./Section";
import SubSection from "./SubSection";

interface SkillsProps {}
export default function Skills() {
  return (
    <Section title="Skills">
      <div className="grid grid-cols-2 gap-12 lg:grid-cols-2 lg:gap-3 md:grid-cols-2 md:gap-1 sm:block sm:gap-0">
        <SubSection title="Programming Languages">
          <PopList
            items={[
              "Typescript / Javascript",
              "CSS / SASS / LESS",
              "C#",
              "Dart",
            ]}
          />
        </SubSection>
        <SubSection title="Frameworks/Tools">
          <PopList items={["Node js", "React", "React Native", "Flutter"]} />
        </SubSection>
        <SubSection title="Databases">
          <PopList items={["MongoDb", "MySQL", "Firebase"]} />
        </SubSection>
        <SubSection title="DevOps">
          <PopList items={["Docker", "AWS", "Bash/Unix"]} />
        </SubSection>
      </div>
    </Section>
  );
}
