import Head from "next/head";
import Education from "../components/Education";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Skills from "../components/Skills";
import Welcome from "../components/Welcome";

export default function Index() {
  return (
    <Layout activeLinkName="About">
      <Head>
        <title>Cristobal Salazar</title>
        <meta
          name="description"
          content="Personal website of Software Developer Cristobal Salazar"
        />
      </Head>

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
  );
}
