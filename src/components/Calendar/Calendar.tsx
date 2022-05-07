import Cell from "../Cell";
import styles from "./Calendar.module.scss";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import Header from "../Header";

const allDays = (currentDate: Dayjs) => {
  const monthStart = dayjs(currentDate).startOf("month");
  const monthEnd = dayjs(currentDate).endOf("month");
  const monthDays = dayjs(currentDate).daysInMonth();
  const lastMonth = dayjs(currentDate).subtract(1, "month");
  const nextMonth = dayjs(currentDate).add(1, "month");

  let days: { date: Dayjs; thisMonth: boolean }[] = [];
  for (
    let i = lastMonth.daysInMonth() - monthStart.day();
    i < lastMonth.daysInMonth();
    i++
  ) {
    days.push({
      date: currentDate.date(i).month(lastMonth.month()),
      thisMonth: false,
    });
  }

  for (let i = 1; i <= monthDays; i++) {
    days.push({ date: currentDate.date(i), thisMonth: true });
  }
  const dayLen = days.length > 35 ? 7 : 14;
  for (let i = 1; i < dayLen - monthEnd.day(); i++) {
    days.push({
      date: currentDate.date(i).month(nextMonth.month()),
      thisMonth: false,
    });
  }
  return days;
};
function Calendar() {
  const [currentDate, setCurrentDate] = useState(dayjs());
  // console.log(allDays());

  return (
    <div>
      <Header currentDate={currentDate} setCurrentDate={setCurrentDate} />
      <div className={styles.calendar}>
        {allDays(currentDate).map(({ date, thisMonth }, i) => (
          <Cell key={i} date={date} thisMonth={thisMonth} />
        ))}
      </div>
    </div>
  );
}

export default Calendar;
