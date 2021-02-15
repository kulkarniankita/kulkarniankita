import Link from "next/link";
import styles from "./nav-bar.module.css";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import clsx from "classnames";

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
  const { theme, setTheme } = useTheme();

  return (
    <nav
      className={clsx(
        styles.navbar,
        "dark:bg-lightgrey dark:text-whitedarktheme"
      )}
    >
      <ul>
        <button
          className="w-10 h-10 border-0 bg-white dark:text-gray-100 dark:bg-black outline-none mr-auto"
          aria-label="Toggle Dark Mode"
          type="button"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </button>
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
