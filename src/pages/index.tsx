import BasePage from "../components/BasePage";
import { GetStaticProps } from "next";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import ScrollFadeOut from "../components/ScrollFadeOut";
import Welcome from "../components/Welcome";
import { aboutQuery } from "../graphql/queries";
import { useGraphQl } from "../hooks/useGraphQl";
import { about } from "../utils/templateDefaults";
import { Project } from "../dto/text.dto";

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
      <ScrollFadeOut>
        <header className="relative z-0 h-screen mb-32 sm:mb-0 sm:h-screen bg-light">
          <Hero
            title={about.title}
            subtitle={about.subtitle}
            imgsrc={about.background_img?.url}
          />
        </header>
      </ScrollFadeOut>
      <main className="mx-auto sm:pb-0" role="main">
        <section
          className="container flex flex-col justify-center h-screen m-auto"
          id="welcome"
        >
          <Welcome
            paragraph={about.paragraph}
            slogan={about.slogan}
            profilePicUrl={about.profile_pic.url}
          />
        </section>
        <section className="from-dark to-accent bg-gradient-to-br">
          <div
            className="container grid min-h-screen grid-cols-3 gap-3 py-12 mx-auto"
            id="projects"
          >
            {about.projects.map((p) => (
              <div className="">
                <img
                  className="object-cover w-full h-64 rounded-lg"
                  src={p.files[0].url}
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  </BasePage>
);
export default Index;

export const getStaticProps: GetStaticProps = async () => {
  if (process.env.IS_TEMPLATE) {
    return { props: about };
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
