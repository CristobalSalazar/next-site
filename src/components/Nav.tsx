import styles from "../styles/nav.module.scss";
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
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <h1 className={styles.title}>{title}</h1>
          <ul className={styles.links}>
            {links.map((link) => (
              <li className={styles.navElement} key={link.name}>
                <Link href={link.route}>
                  <a
                    className={[
                      styles.navLink,
                      link.active && styles.active,
                    ].join(" ")}
                  >
                    {link.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.navRight}>
          <a
            className={styles.socialIcon}
            href="https://github.com/cristobalsalazar"
          >
            <i
              id="github"
              className={`${styles.github} fa fa-github-square`}
              aria-hidden="true"
            ></i>
          </a>
          <a
            className={styles.socialIcon}
            href="https://www.linkedin.com/in/cristobal-salazar-849960164/"
          >
            <i
              id="facebook"
              className={`${styles.linkedIn} fa fa-linkedin-square`}
              aria-hidden="true"
            ></i>
          </a>
        </div>
      </nav>
    </>
  );
}
