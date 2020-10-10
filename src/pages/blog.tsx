import BasePage from "../components/BasePage";
import Layout from "../components/Layout";
import Section from "../components/Section";

interface BlogPage {}
export default function Blog() {
  return (
    <BasePage
      title="Cristobal Salazar - Blog"
      description="Cristobal Salazar's Blog"
    >
      <Layout activeLinkName="Blog">
        <div style={{ minHeight: "100vh", padding: "3rem" }}>
          <Section title="Blog"></Section>
        </div>
      </Layout>
    </BasePage>
  );
}
