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
        <header className="relative z-0 mb-32 sm:h-screen h-screen/2">
          <Hero title="Cristobal Salazar" subtitle="Full-Stack Web Developer" />
        </header>

        <div className="block max-w-6xl mx-auto overflow-x-hidden xl:max-w-4xl lg:max-w-3xl">
          <main role="main">
            <Welcome />
            <Skills />
            <Education />
          </main>
        </div>
      </Layout>
    </BasePage>
  );
}
