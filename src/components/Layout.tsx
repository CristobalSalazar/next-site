import Head from "next/head";

interface LayoutProps {}
const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter&family=David+Libre&family=Playfair+Display&family=Sansita+Swashed&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" type="image/png" href="/favicon.png" />
    </Head>
    {children}
  </>
);
export default Layout;
