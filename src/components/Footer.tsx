import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import Link from "next/link";

type LinkInfo = { name: string; href: string };
interface FooterProps {
  sections: { name: string; links: LinkInfo[] }[];
}
export default function Footer({ sections }: FooterProps) {
  return (
    <footer className="footer">
      <ul className="footer-container">
        {sections.map((s) => (
          <div className="footer-list">
            <h1>{s.name}</h1>
            <ul>
              {s.links.map((link) => (
                <li>
                  <Link href={link.href}>
                    <a>{link.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
    </footer>
  );
}
