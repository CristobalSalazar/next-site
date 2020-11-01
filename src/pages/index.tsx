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
import { BACKEND_URL } from "../config";

export interface IndexProps {
  about?: {
    title: string;
    my_email: string;
    subtitle: string;
    background_img: { url: string };
    profile_pic: { url: string };
    slogan: string;
    paragraph: string;
    featured_project: Project;
    projects: Project[];
  };
}

const Index: React.FC<IndexProps> = ({ about }) => (
  <BasePage title={about?.title} description={about?.subtitle}>
    <Layout>
      <main className="h-screen bg-dark">
        <section id="hero">
          <ScrollFadeOut>
            <Hero
              title={about.title}
              subtitle={about.subtitle}
              imgsrc={about.background_img?.url}
            />
          </ScrollFadeOut>
        </section>
        <div className="h-screen bg-light">
          <section
            id="welcome"
            className="container flex flex-col justify-center min-h-full py-12 m-auto mx-auto"
          >
            <Welcome
              email={about.my_email}
              paragraph={about.paragraph}
              slogan={about.slogan}
              profilePicUrl={about.profile_pic.url}
            />
          </section>
        </div>
        <section
          id="project-reel"
          className="relative h-screen bg-radial-primary bg-accent sm:bg-light"
        >
          <ScrollFadeIn>
            <ProjectReel
              projects={about.projects}
              featured={about.featured_project}
            />
          </ScrollFadeIn>
        </section>
      </main>
    </Layout>
  </BasePage>
);
export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const REVALIDATE_SECONDS = 60;
  type GraphQlResponse = { errors: [{ message: string }]; data: IndexProps };
  try {
    const res = await graphql.query(aboutQuery);
    const json: GraphQlResponse = await res.json();
    if (json.errors) {
      throw json.errors.map((e) => e.message);
    } else {
      const { data: props } = json;
      props.about.background_img.url =
        BACKEND_URL + props.about.background_img.url;
      props.about.profile_pic.url = BACKEND_URL + props.about.profile_pic.url;
      props.about.featured_project.files[0].url =
        BACKEND_URL + props.about.featured_project.files[0].url;
      props.about.projects = props.about.projects.map((p) => {
        p.files[0].url = BACKEND_URL + p.files[0].url;
        return p;
      });
      return {
        props,
        revalidate: REVALIDATE_SECONDS,
      };
    }
  } catch (err) {
    console.error("Error", err);
    const props = await getDefaultIndexProps();
    return { props, revalidate: REVALIDATE_SECONDS };
  }
};
