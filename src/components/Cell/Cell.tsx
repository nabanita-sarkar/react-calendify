import { Dayjs } from "dayjs";
import React from "react";
import styles from "./Cell.module.scss";

function Cell({ date, thisMonth }: { date: Dayjs; thisMonth: boolean }) {
  return (
    <div className={styles[thisMonth ? "cell" : "cell-disabled"]}>
      {date.format("D")}
    </div>
  );
}

export default Cell;
