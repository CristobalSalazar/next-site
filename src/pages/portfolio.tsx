import Layout from "../components/Layout";
import Project from "../components/Project";
import BasePage from "../components/BasePage";
import SiteFooter from "../components/SiteFooter";
import ProfileNav from "../components/ProfileNav";
import { GetStaticProps } from "next";
import { useGraphQl } from "../hooks/useGraphQl";
import { portfolioQuery } from "../graphql/queries";
import { BACKEND_URL } from "../config";

interface PortfolioProps {
  about: {
    title: string;
  };
  projects: [
    {
      title: string;
      description: string;
      link: string;
      files: [{ url: string }];
    }
  ];
}
const Portfolio: React.FC<PortfolioProps> = ({ about, projects }) => {
  return (
    <BasePage
      title={about.title + " - Portfolio"}
      description="A Project showcase by Cristobal Salazar"
    >
      <ProfileNav title={about.title} activeLinkName="Portfolio" />
      <div className="bg-light">
        <Layout>
          {projects.length > 0 && (
            <main className="container pt-24 pb-12 mx-auto sm:px-3" role="main">
              {projects.map((project) => (
                <Project
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  gitLink={project.link}
                  videoSrc={BACKEND_URL + project.files[0].url}
                />
              ))}
            </main>
          )}
        </Layout>
        <div className="bg-dark">
          <SiteFooter />
        </div>
      </div>
    </BasePage>
  );
};
export default Portfolio;

export const getStaticProps: GetStaticProps = async () => {
  const graphql = useGraphQl();
  try {
    const res = await graphql.query(portfolioQuery);
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
