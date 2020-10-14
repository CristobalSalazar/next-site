import Footer from "./Footer";

const SiteFooter = () => (
  <Footer
    sections={[
      {
        name: "About",
        links: [
          { name: "Welcome", href: "/#welcome" },
          { name: "Skills", href: "/#skills" },
          { name: "Education", href: "/#education" },
          { name: "Portfolio", href: "/portfolio" },
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
            href: "https://www.linkedin.com/in/cristobal-salazar-849960164/",
          },
        ],
      },
      {
        name: "Contact",
        links: [{ name: "Email", href: "mailto:chris.salza@gmail.com" }],
      },
    ]}
  />
);
export default SiteFooter;
