import Link from "next/link";
import styles from "./nav-bar.module.css";

export default function NavBar({}) {
  const data = [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Blog",
      href: "/posts",
    },
    {
      title: "Conferences",
      href: "/conferences",
    },
    {
      title: "Home",
      href: "/",
    },
  ];
  return (
    <nav className={styles.navbar}>
      <ul>
        {data.map(({ title, href }, idx) => (
          <li>
            <Link key={`${idx}-${title}`} href={href}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
