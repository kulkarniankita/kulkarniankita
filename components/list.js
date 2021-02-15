import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "./date";

export default function List({ heading, data, link: parentLink, formatType }) {
  return (
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingXl}>{heading}</h2>
      <ul className={utilStyles.list}>
        {data.map(({ id, date, title, link, description }) => (
          <li className={utilStyles.listItem} key={id}>
            <Link href={parentLink ? `${parentLink}/${id}` : link}>
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
