import { parseISO, format } from "date-fns";

export default function Date({ dateString, formatType = "LLLL d, yyyy" }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, formatType)}</time>;
}
