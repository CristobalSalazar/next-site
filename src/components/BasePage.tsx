import Head from "next/head";
interface BasePageProps {
  title: string;
  description: string;
  children?: any;
}
export default function BasePage({
  title,
  description,
  children,
}: BasePageProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      {children}
    </>
  );
}
