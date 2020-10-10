import Footer from "./Footer";
import Nav from "./Nav";
import Head from "next/head";

interface LayoutProps {
  activeLinkName: string;
  children?: any;
}
export default function Layout(props: LayoutProps) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=David+Libre&family=Playfair+Display&family=Sansita+Swashed&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Nav
        title="Cristobal Salazar"
        links={[
          {
            name: "About",
            route: "/",
            active: props.activeLinkName === "About",
          },
          {
            name: "Portfolio",
            route: "/portfolio",
            active: props.activeLinkName === "Portfolio",
          },
          {
            name: "Blog",
            route: "/blog",
            active: props.activeLinkName === "Blog",
          },
        ]}
      />
      {props.children}
      <Footer
        sections={[
          {
            name: "About",
            links: [
              { name: "Welcome", href: "/#welcome" },
              { name: "Skills", href: "/#skills" },
              { name: "Education", href: "/#education" },
            ],
          },
          {
            name: "Portfolio",
            links: [
              { name: "Web", href: "portfolio#web" },
              { name: "Unity", href: "portfolio/#unity" },
              { name: "Console", href: "portfolio/#console" },
            ],
          },
          {
            name: "Social",
            links: [
              {
                name: "Github",
                href: "https://www.github.com/cristobalsalazar",
              },
              {
                name: "LinkedIn",
                href:
                  "https://www.linkedin.com/in/cristobal-salazar-849960164/",
              },
            ],
          },
          {
            name: "Contact",
            links: [{ name: "Email", href: "mailto:chris.salza@gmail.com" }],
          },
        ]}
      />
    </>
  );
}
