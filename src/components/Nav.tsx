import Link from "next/link";
import { useEffect, useRef } from "react";

interface NavProps {
  title: string;
  links: { name: string; route: string; active?: boolean }[];
}
export default function Nav({ title, links }: NavProps) {
  const navElement = useRef<HTMLElement>(null);
  useEffect(() => {
    navElement.current.style.opacity = "0";
    const style = window.getComputedStyle(navElement.current);
    console.log(style.backgroundColor);
    document.body.onscroll = (e) => {
      const bodyTop = document.body.getBoundingClientRect().top;
      const opacity = Math.min(0 - (bodyTop / window.innerHeight) * 2, 1);
      navElement.current.style.opacity = opacity.toString();
    };
  }, []);
  return (
    <>
      <nav
        ref={navElement}
        className="fixed z-10 flex justify-between w-screen p-3 shadow-md bg-light"
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
