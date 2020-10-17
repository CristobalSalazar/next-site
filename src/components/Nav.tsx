import Link from "next/link";

interface NavProps {
  title: string;
  links: { name: string; route: string; active?: boolean }[];
}
export default function Nav({ title, links }: NavProps) {
  return (
    <>
      <nav className="fixed flex w-screen p-3">
        <span className="box-border flex-shrink-0 pr-4 font-serif text-lg font-bold text-black h-100 sm:hidden">
          {title}
        </span>
        <ul className="flex w-full ml-4 text-sm sm:ml-0 sm:justify-around">
          {links.map((link) => (
            <li className="mr-6 sm:mr-0" key={link.name}>
              <Link href={link.route}>
                <a
                  className={`${
                    link.active ? "text-accent underline" : "text-dark"
                  } hover:text-black transition-colors duration-300`}
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
