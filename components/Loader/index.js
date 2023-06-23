import React from "react";
import styles from "./index.module.scss";

export default function Loader() {
  return (
    <p className={styles["skeleton-box-wrapper"]}>
      <span className={styles["skeleton-box"]} style={{ width: "80%" }}></span>
      <span className={styles["skeleton-box"]} style={{ width: "83%" }}></span>
      <span className={styles["skeleton-box"]} style={{ width: "89%" }}></span>
      <span className={styles["skeleton-box"]} style={{ width: "40%" }}></span>
    </p>
  );
}
