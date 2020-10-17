import BasePage from "../components/BasePage";
import { GetStaticProps } from "next";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import ScrollFadeOut from "../components/ScrollFadeOut";
import Welcome from "../components/Welcome";
import { aboutQuery } from "../graphql/queries";
import { useGraphQl } from "../hooks/useGraphQl";
import { getIndexProps } from "../utils/templateDefaults";
import { Project } from "../dto/text.dto";
import ScrollFadeIn from "../components/ScrollFadeIn";
import ProfileNav from "../components/ProfileNav";
import ProjectReel from "../components/ProjectReel";

export interface IndexProps {
  about?: {
    title: string;
    subtitle: string;
    background_img: { url: string };
    profile_pic: { url: string };
    slogan: string;
    paragraph: string;
    projects: Project[];
  };
}
const Index: React.FC<IndexProps> = ({ about }) => {
  return (
    <BasePage title={about?.title} description={about?.subtitle}>
      <ProfileNav title={about.title} activeLinkName="About" />
      <Layout>
        <header className="bg-light">
          <ScrollFadeOut className="relative z-0 h-screen sm:mb-0 sm:h-screen bg-light">
            <Hero
              title={about.title}
              subtitle={about.subtitle}
              imgsrc={about.background_img?.url}
            />
          </ScrollFadeOut>
        </header>
        <main className="mx-auto sm:pb-0" role="main">
          <section id="welcome" className="bg-light">
            <div className="container flex flex-col justify-center h-screen min-h-full py-12 m-auto">
              <Welcome
                paragraph={about.paragraph}
                slogan={about.slogan}
                profilePicUrl={about.profile_pic.url}
              />
            </div>
          </section>
          <ScrollFadeIn>
            <section
              id="project-reel"
              className="from-dark to-accent bg-gradient-to-b"
            >
              <ProjectReel projects={about.projects} />
            </section>
          </ScrollFadeIn>
        </main>
      </Layout>
    </BasePage>
  );
};
export default Index;

export const getStaticProps: GetStaticProps = async () => {
  if (process.env.IS_TEMPLATE) {
    const props = await getIndexProps();
    return { props };
  }
  const graphql = useGraphQl();
  try {
    const res = await graphql.query(aboutQuery);
    const data: { errors: any[]; data: any } = await res.json();

    if (data.errors) {
      throw data.errors.map((e) => e.message);
    } else {
      return {
        props: data.data,
      };
    }
  } catch (err) {
    console.error("Error", err);
  }
};
