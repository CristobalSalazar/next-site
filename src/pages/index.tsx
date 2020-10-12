import BasePage from "../components/BasePage";
import Education from "../components/Education";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Skills from "../components/Skills";
import Welcome from "../components/Welcome";
import { useIntersection } from "react-use";
import { useRef } from "react";
import { useSpring, animated } from "react-spring";
import ScrollFadeOut from "../components/ScrollFadeOut";
import SiteFooter from "../components/SiteFooter";
import ScrollFadeIn from "../components/ScrollFadeIn";

export default function Index() {
  return (
    <BasePage
      title="Cristobal Salazar"
      description="Personal website for Cristobal Salazar"
    >
      <Layout activeLinkName="About">
        <ScrollFadeOut>
          <header className="relative z-0 mb-32 sm:mb-0 sm:h-screen h-screen/2">
            <Hero
              title="Cristobal Salazar"
              subtitle="Full-Stack Web Developer"
            />
          </header>
        </ScrollFadeOut>
        <main className="container pb-16 mx-auto sm:pb-0" role="main">
          <div className="" id="welcome">
            <Welcome />
          </div>
          <div className="" id="skills">
            <Skills />
          </div>
          <div className="" id="education">
            <Education />
          </div>
        </main>
      </Layout>
      <ScrollFadeIn>
        <SiteFooter />
      </ScrollFadeIn>
    </BasePage>
  );
}
