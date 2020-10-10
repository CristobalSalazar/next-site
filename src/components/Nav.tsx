import Link from "next/link";
import Head from "next/head";

interface NavProps {
  title: string;
  links: { name: string; route: string; active?: boolean }[];
}
export default function Nav({ title, links }: NavProps) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
          key="fa"
        />
      </Head>
      <nav
        className={`shadow-md fixed z-10 flex justify-between w-screen p-3 bg-light`}
      >
        <div className="flex ml-4">
          <h1 className="box-border pr-4 font-normal uppercase border-r border-black md:hidden h-100 dark">
            {title}
          </h1>
          <ul className="ml-4 sm:ml-0">
            {links.map((link) => (
              <li className="inline mr-6 muted" key={link.name}>
                <Link href={link.route}>
                  <a
                    className={`${
                      link.active ? "text-accent" : "text-muted"
                    } text-serif hover:text-accent transition-colors duration-150`}
                  >
                    {link.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
