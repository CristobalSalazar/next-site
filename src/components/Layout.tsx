import Footer from "./Footer";
import Nav from "./Nav";
import Head from "next/head";
import ScrollFadeIn from "./ScrollFadeIn";

interface LayoutProps {
  activeLinkName: string;
  children?: any;
}
export default function Layout(props: LayoutProps) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&David+Libre&family=Playfair+Display&family=Sansita+Swashed&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href="/images/favicon.png" />
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
        ]}
      />
      <div className="bg-light">{props.children}</div>
    </>
  );
}
