import BasePage from "../components/BasePage";
import { GetStaticProps } from "next";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import ScrollFadeOut from "../components/ScrollFadeOut";
import Welcome from "../components/Welcome";
import { aboutQuery } from "../graphql/queries";
import graphql from "../hooks/useGraphQl";
import { getDefaultIndexProps } from "../utils/templateDefaults";
import { Project } from "../dto/text.dto";
import ScrollFadeIn from "../components/ScrollFadeIn";
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

const Index: React.FC<IndexProps> = ({ about }) => (
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
        <section
          id="project-reel"
          className="relative h-screen bg-radial-primary bg-dark sm:bg-light"
        >
          <ScrollFadeIn>
            <ProjectReel projects={about.projects} />
          </ScrollFadeIn>
        </section>
      </main>
    </Layout>
  </BasePage>
);
export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const REVALIDATE_SECONDS = 60;
  type GraphQlResponse = { errors: [{ message: string }]; data: any };
  try {
    const res = await graphql.query(aboutQuery);
    const data: GraphQlResponse = await res.json();
    if (data.errors) {
      throw data.errors.map((e) => e.message);
    } else {
      return {
        props: data.data,
        revalidate: REVALIDATE_SECONDS,
      };
    }
  } catch (err) {
    console.error("Error", err);
    const props = await getDefaultIndexProps();
    return { props, revalidate: REVALIDATE_SECONDS };
  }
};
