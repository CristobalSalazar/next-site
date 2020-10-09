import Footer from "./Footer";
import Nav from "./Nav";

interface LayoutProps {
  activeLinkName: string;
  children: any;
}
export default function Layout(props: LayoutProps) {
  return (
    <>
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
        ]}
      />
      {props.children}
      <Footer
        sections={[
          {
            name: "About",
            links: [
              { name: "About", href: "/#about" },
              { name: "Skills", href: "/#skills" },
              { name: "Education", href: "/#education" },
            ],
          },
          {
            name: "Portfolio",
            links: [
              { name: "Unity", href: "portfolio/#unity" },
              { name: "Web", href: "portfolio#web" },
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
        ]}
      />
    </>
  );
}
