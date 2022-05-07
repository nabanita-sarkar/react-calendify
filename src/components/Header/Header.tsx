import { Dayjs } from "dayjs";
import React from "react";
import styles from "./Header.module.scss";

function Header({
  currentDate,
  setCurrentDate,
}: {
  currentDate: Dayjs;
  setCurrentDate: (date: Dayjs) => void;
}) {
  return (
    <div className={styles.container}>
      <button onClick={() => setCurrentDate(currentDate.subtract(1, "month"))}>
        prev
      </button>
      <span>{currentDate.format("MMM, YYYY")}</span>
      <button onClick={() => setCurrentDate(currentDate.add(1, "month"))}>
        next
      </button>
    </div>
  );
}

export default Header;
