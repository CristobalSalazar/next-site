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
      <Layout>
        <main className="h-screen bg-light">
          <section id="hero">
            <ScrollFadeOut>
              <Hero
                title={about.title}
                subtitle={about.subtitle}
                imgsrc={about.background_img?.url}
              />
            </ScrollFadeOut>
          </section>
          <section
            id="welcome"
            className="container flex flex-col justify-center min-h-full py-12 m-auto mx-auto bg-light"
          >
            <Welcome
              paragraph={about.paragraph}
              slogan={about.slogan}
              profilePicUrl={about.profile_pic.url}
            />
          </section>
          <ScrollFadeIn>
            <section
              id="project-reel"
              className="relative h-screen bg-radial-primary bg-dark sm:bg-light"
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
