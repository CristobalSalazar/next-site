import Head from "next/head";
import styles from "./hero.module.scss";
interface HeroProps {
  title?: string;
  subtitle?: string;
}
export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <>
      <div className={styles.background}>
        {/* <img src="/images/ep.png" alt="background" /> */}
      </div>
      <div className={styles.heroLayout}>
        <div className={styles.profilePicture}>
          <img src="/images/profile.jpg" alt="profile picture" />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{title}</h1>
          <h1 className={styles.subtitle}>{subtitle}</h1>
        </div>
      </div>
    </>
  );
}
