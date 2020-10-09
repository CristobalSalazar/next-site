import Section from "./Section";

interface WelcomeProps {}
export default function Welcome(props: WelcomeProps) {
  return (
    <Section title="Welcome">
      <div className="profile">
        <div className="mobile">
          <div className="mobile-img"></div>
        </div>
        <p className="profile-text">
          My love for software began while studying Audio production at Humber
          College, I started taking interest in the Unity Engine. Curious to see
          what kind of software I could develop, I quickly realized that I had
          the passion and drive to create my own applications. After graduating,
          I enrolled in a certificate course at the University of Toronto for
          Web Development. Being already comfortable with C#, and having several
          years of programming experience, it didn’t take long before I added
          web technologies such as React, Javascript, Node.js, and many others
          to my skillset.
        </p>
        <p className="profile-text">
          If you're in need of a developer on your team, or if you’re in need of
          a website to promote your business, showcase your portfolio, and bring
          your app ideas to life, feel free to
          <a href="mailto:chris.salza@gmail.com"> reach out.</a> I'm looking
          forward to connecting with you! <br />
          <br />
          <em>
            To view examples of my work created over the years. Please visit the
            portfolio section.
          </em>
        </p>
      </div>
    </Section>
  );
}
