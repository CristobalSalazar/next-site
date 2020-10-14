import { SkillSet } from "../dto/text.dto";
import PopList from "./PopList";
import Section from "./Section";
import SubSection from "./SubSection";

interface SkillsProps {
  skillsets: SkillSet[];
}
export default function Skills({ skillsets }: SkillsProps) {
  return (
    <>
      {skillsets.length > 0 && (
        <Section title="Skills">
          <div className="grid grid-cols-2 gap-12 lg:grid-cols-2 lg:gap-3 md:grid-cols-2 md:gap-1 sm:block sm:gap-0">
            {skillsets.map((skillset) => (
              <SubSection title={skillset.title} key={skillset.title}>
                <PopList
                  items={skillset.skills.map((skill) => skill.content)}
                />
              </SubSection>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
