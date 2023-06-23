import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";

export default function DashboardSatsCards({ color, label, value, iconURL }) {
  return (
    <div
      className={styles["dashboard-stats-cards"]}
      style={{ background: color }}
    >
      <div className={styles["dashboard-stats-image-container"]}>
        <Image src={iconURL} alt="sats" width={20} height={20} />
      </div>
      <div className={styles["dashboard-stats-heading"]}>{label}</div>
      <div className={styles["dashboard-stats-value"]}>{value}</div>
    </div>
  );
}
