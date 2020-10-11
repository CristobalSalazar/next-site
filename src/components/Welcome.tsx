import Section from "./Section";
import Text from "./Text";

interface WelcomeProps {}
export default function Welcome(props: WelcomeProps) {
  return (
    <Section title="Welcome" className="sm:bg-dark">
      <div className="relative grid grid-cols-2 gap-12 mb-8 overflow-x-hidden rounded md:mb-0 md:block sm:block">
        <Text className="sm:text-secondary">
          My love for software began while studying Audio production at Humber
          College, I started wondering how the technology all around me was
          built. Curious to see what kind of software I could develop, I quickly
          realized that I had the passion and drive to create my own
          applications. After graduating, I enrolled in a certificate course at
          the University of Toronto for Web Development. Being already
          comfortable with C#, and having prior programming experience, it
          didn’t take long before I added web technologies such as Javascript,
          Typescript, React, Node.js, and many others to my skillset.
        </Text>
        <Text className="sm:text-secondary">
          If you're in need of a developer on your team, or if you’re in need of
          a website to promote your business, showcase your portfolio, or bring
          your app ideas to life, feel free to
          <strong>
            <a
              className="font-bold text-accent"
              href="mailto:chris.salza@gmail.com"
            >
              {" "}
              reach out to me.
            </a>
          </strong>
          <br />
          <br />
          <em>
            To view examples of my work created over the years. Please visit the
            portfolio section.
          </em>
        </Text>
      </div>
    </Section>
  );
}
