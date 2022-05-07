import Cell from "../Cell";
import styles from "./Calendar.module.scss";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import Header from "../Header";
import { monthDays } from "../../functions/monthly";
import { CalendarType } from "../../utils/types";
import { weekDays } from "../../functions/weekly";

function Calendar({ type = "weekly" }: { type: CalendarType }) {
  const [currentDate, setCurrentDate] = useState(dayjs());

  return (
    <div>
      <Header
        type={type}
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
      />
      {type === "monthly" ? (
        <div className={styles["monthly-calendar"]}>
          {monthDays(currentDate).map((dateTime, i) => (
            <Cell
              type={type}
              key={i}
              dateTime={dateTime}
              currentDate={currentDate}
            />
          ))}
        </div>
      ) : type === "weekly" ? (
        <div className={styles["weekly-calendar"]}>
          {weekDays(currentDate).map((dateTime, i) => (
            <Cell
              type={type}
              key={i}
              dateTime={dateTime}
              currentDate={currentDate}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default Calendar;
