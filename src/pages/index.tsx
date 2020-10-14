import BasePage from "../components/BasePage";
import Education from "../components/Education";
import { Paragraph, SkillSet } from "../dto/text.dto";
import { GetStaticProps } from "next";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import ScrollFadeIn from "../components/ScrollFadeIn";
import ScrollFadeOut from "../components/ScrollFadeOut";
import SiteFooter from "../components/SiteFooter";
import Skills from "../components/Skills";
import Welcome from "../components/Welcome";
import { aboutQuery } from "../graphql/queries";
import { useGraphQl } from "../hooks/useGraphQl";
import { BACKEND_URL } from "../config";
import ProfileNav from "../components/ProfileNav";

interface IndexProps {
  about?: {
    title: string;
    subtitle: string;
    paragraphs: Paragraph[];
    education: Paragraph[];
    skillsets: SkillSet[];
    profile_pic: { url: string };
  };
}
const Index: React.FC<IndexProps> = ({ about }) => (
  <BasePage title={about?.title} description={about?.subtitle}>
    <ProfileNav title={about.title} activeLinkName="About" />
    <Layout>
      <ScrollFadeOut>
        <header className="relative z-0 mb-32 sm:mb-0 sm:h-screen h-screen/2">
          <Hero
            title={about.title}
            subtitle={about.subtitle}
            imgsrc={BACKEND_URL + about.profile_pic.url}
          />
        </header>
      </ScrollFadeOut>
      <main className="container pb-16 mx-auto sm:pb-0" role="main">
        <div className="" id="welcome">
          <Welcome paragraphs={about.paragraphs.map((p) => p.content)} />
        </div>
        <div className="" id="skills">
          <Skills skillsets={about.skillsets} />
        </div>
        <div className="" id="education">
          <Education items={about.education.map((e) => e.content)} />
        </div>
      </main>
    </Layout>
    <ScrollFadeIn>
      <SiteFooter />
    </ScrollFadeIn>
  </BasePage>
);
export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const graphql = useGraphQl();
  try {
    const res = await graphql.query(aboutQuery);
    const data: { errors: any[]; data: any } = await res.json();
    if (data.errors) {
      throw data.errors.map((e) => e.message);
    }
    return {
      props: data.data,
    };
  } catch (err) {
    console.error("Error", err);
  }
};
