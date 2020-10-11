import Link from "next/link";

type LinkInfo = { name: string; href: string };
interface FooterProps {
  sections: { name: string; links: LinkInfo[] }[];
}
export default function Footer({ sections }: FooterProps) {
  return (
    <footer className="flex w-full min-h-screen bg-dark sm:mt-0">
      <ul className="flex w-full max-w-4xl m-auto justify-evenly">
        {sections.map((s) => (
          <li className="sm:my-4" key={s.name}>
            <h5 className="mb-4 text-2xl font-normal text-light">{s.name}</h5>
            <nav>
              <ul>
                {s.links.map((link, i) => (
                  <li className="mb-4" key={i}>
                    <Link href={link.href}>
                      <a className="cursor-pointer text-primary hover:text-light">
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
