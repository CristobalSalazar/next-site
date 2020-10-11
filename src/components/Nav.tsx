import Link from "next/link";
import { useEffect, useRef } from "react";

interface NavProps {
  title: string;
  links: { name: string; route: string; active?: boolean }[];
}
export default function Nav({ title, links }: NavProps) {
  const navElement = useRef<HTMLElement>(null);
  useEffect(() => {
    document.body.onscroll = (e) => {
      console.log(window.innerHeight); // 100vh
      // our opacity is 0 to 1;
      console.log("nav", navElement.current.getBoundingClientRect().top);
      console.log("body", document.body.getBoundingClientRect().top);
    };
  }, []);
  return (
    <>
      <nav
        ref={navElement}
        className={`shadow-md fixed z-10 flex justify-between w-screen p-3 bg-light`}
      >
        <div className="flex ml-4">
          <span className="box-border pr-4 font-normal border-r border-black font-cursive h-100 dark sm:hidden">
            {title}
          </span>
          <ul className="ml-4 sm:ml-0">
            {links.map((link) => (
              <li className="inline mr-6 muted" key={link.name}>
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
