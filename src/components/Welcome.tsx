import Section from "./Section";
import Text from "./Text";

interface WelcomeProps {
  paragraphs: string[];
}
export default function Welcome(props: WelcomeProps) {
  return (
    <Section title="Welcome">
      <div className="relative grid grid-cols-2 gap-12 mb-8 overflow-x-hidden rounded md:mb-0 md:block sm:block">
        {props.paragraphs.map((p, i) => (
          <Text key={i}>{p}</Text>
        ))}
      </div>
    </Section>
  );
}
