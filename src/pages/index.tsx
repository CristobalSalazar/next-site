import BasePage from "../components/BasePage";
import Education from "../components/Education";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Skills from "../components/Skills";
import Welcome from "../components/Welcome";

export default function Index() {
  return (
    <BasePage
      title="Cristobal Salazar"
      description="Personal website for Cristobal Salazar"
    >
      <Layout activeLinkName="About">
        <header className="relative z-0 mb-32 sm:mb-0 sm:h-screen h-screen/2">
          <Hero title="Cristobal Salazar" subtitle="Full-Stack Web Developer" />
        </header>
        <main className="container pb-32 mx-auto sm:px-3" role="main">
          <Welcome />
          <Skills />
          <Education />
        </main>
      </Layout>
    </BasePage>
  );
}
