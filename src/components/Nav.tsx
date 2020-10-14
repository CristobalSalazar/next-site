import Link from "next/link";

interface NavProps {
  title: string;
  links: { name: string; route: string; active?: boolean }[];
}
export default function Nav({ title, links }: NavProps) {
  return (
    <>
      <nav className="fixed z-10 flex w-screen p-3 shadow-md bg-light">
        <span className="box-border flex-shrink-0 pr-4 text-dark font-cursive h-100 sm:hidden">
          {title}
        </span>
        <ul className="flex w-full ml-4 sm:ml-0 sm:justify-around">
          {links.map((link) => (
            <li className="mr-6 sm:mr-0" key={link.name}>
              <Link href={link.route}>
                <a
                  className={`${
                    link.active ? "text-accent" : "text-dark"
                  } hover:text-accent transition-colors duration-300`}
                >
                  {link.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
