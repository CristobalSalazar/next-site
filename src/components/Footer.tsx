import Link from "next/link";

type LinkInfo = { name: string; href: string };
interface FooterProps {
  sections: { name: string; links: LinkInfo[] }[];
}
export default function Footer({ sections }: FooterProps) {
  return (
    <footer className="flex w-full min-h-screen from-accent to-dark bg-gradient-to-b">
      <ul className="flex w-full max-w-4xl m-auto justify-evenly">
        {sections.map((s) => (
          <li className="sm:my-4" key={s.name}>
            <h5 className="mb-4 text-2xl font-normal sm:text-xl sm:mb-3 text-light">
              {s.name}
            </h5>
            <nav>
              <ul>
                {s.links.map((link, i) => (
                  <li className="mb-2" key={i}>
                    <Link href={link.href}>
                      <a className="font-thin transition-colors duration-300 cursor-pointer text-primary hover:text-secondary">
                        {link.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </li>
        ))}
      </ul>
    </footer>
  );
}
