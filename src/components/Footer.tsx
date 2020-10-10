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
          <li className="footer-list" key={s.name}>
            <h1>{s.name}</h1>
            <ul>
              {s.links.map((link, i) => (
                <li key={i}>
                  <Link href={link.href}>
                    <a>{link.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </footer>
  );
}
