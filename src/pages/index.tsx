import Head from "next/head";
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
        <header id="intro">
          <Hero title="Cristobal Salazar" subtitle="Full-Stack Web Developer" />
        </header>

        <div className="layout">
          <main className="main" role="main">
            <Welcome />
            <Skills />
            <Education />
          </main>
        </div>
      </Layout>
    </BasePage>
  );
}
