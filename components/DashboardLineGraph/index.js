"use client";
import React from "react";
import styles from "./index.module.scss";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    // Additional options...
  },
};

export default function DashboardLineGraph({ chartData }) {
  return (
    <div className={styles["dashboard-line-graph-container"]}>
      <div className={styles["dashboard-line-graph-heading"]}>
        <h3>Activity</h3>
        <select>
          <option>May - June 2021</option>
          <option>June - July 2021</option>
        </select>
      </div>
      <div className={styles["dashboard-line-graph-chart"]}>
        <Line options={chartOptions} data={chartData} />
      </div>
    </div>
  );
}
