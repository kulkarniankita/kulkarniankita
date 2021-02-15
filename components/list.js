import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "./date";
import clsx from "classnames";

export default function List({ heading, data, link: parentLink, formatType }) {
  return (
    <section
      className={clsx(
        `${utilStyles.headingMd} ${utilStyles.padding1px}`,
        "dark:text-white"
      )}
    >
      <h2 className={clsx(utilStyles.headingXl, "dark:text-white")}>
        {heading}
      </h2>
      <ul className={clsx(utilStyles.list, "dark:text-white")}>
        {data.map(({ id, date, title, link, description }) => (
          <li className={utilStyles.listItem} key={id}>
            <Link
              href={parentLink ? `${parentLink}/${id}` : link}
              className="font-medium text-gray-500 hover:text-gray-900"
            >
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} formatType={formatType} />
            </small>
            <p className={utilStyles.headingSm}>{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
