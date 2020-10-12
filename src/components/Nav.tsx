import Link from "next/link";

interface NavProps {
  title: string;
  links: { name: string; route: string; active?: boolean }[];
}
export default function Nav({ title, links }: NavProps) {
  return (
    <>
      <nav className="fixed z-10 flex justify-between w-screen p-3 bg-transparent bg-light shadow-md">
        <div className="flex ml-4">
          <span className="box-border pr-4 text-dark font-cursive h-100 sm:hidden">
            {title}
          </span>
          <ul className="ml-4 sm:ml-0">
            {links.map((link) => (
              <li className="inline-block mr-6" key={link.name}>
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
        </div>
      </nav>
    </>
  );
}
