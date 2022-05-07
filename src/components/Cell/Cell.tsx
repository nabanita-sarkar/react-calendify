import { Dayjs } from "dayjs";
import { isSameMonth } from "../../functions/monthly";
import { CalendarType } from "../../utils/types";
import styles from "./Cell.module.scss";

function Cell({
  type,
  dateTime,
  currentDate,
}: {
  type: CalendarType;
  dateTime: Dayjs;
  currentDate: Dayjs;
}) {
  const is24 = "HH:mm";
  return (
    <div
      className={
        styles[
          type === "weekly"
            ? "weekly-cell"
            : isSameMonth(dateTime, currentDate)
            ? "monthly-cell"
            : "monthly-cell-disabled"
        ]
      }
    >
      {type === "weekly" ? (
        <small className={styles["week-time"]}>
          {dateTime.minute(0).format("h:mm a")}
        </small>
      ) : type === "monthly" ? (
        dateTime.format("D")
      ) : null}
    </div>
  );
}

export default Cell;
