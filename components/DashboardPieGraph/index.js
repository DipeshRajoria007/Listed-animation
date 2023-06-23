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
  ArcElement,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  elements: {
    arc: {
      borderWidth: 0,
    },
  },
  // Additional options...
};

export default function DashboardPieGraph({ chartData }) {
  return (
    <div className={styles["dashboard-pie-graph-container"]}>
      <div className={styles["dashboard-pie-graph-heading"]}>
        <h2>Top Categories</h2>
        <select>
          <option>May - June 2021</option>
          <option>June - July 2021</option>
        </select>
      </div>
      <div className={styles["dashboard-pie-graph-chart-container"]}>
        <div className={styles["dashboard-pie-graph-chart-container"]}>
          <Pie options={chartOptions} data={chartData} />
        </div>
        <div className={styles["dashboard-pie-graph-legend"]}>
          {chartData.labels.map((label, index) => (
            <div
              className={styles["dashboard-pie-graph-legend-item"]}
              key={label}
            >
              <div
                className={styles["dashboard-pie-graph-legend-color"]}
                style={{
                  background: chartData?.datasets[0]?.backgroundColor[index],
                }}
              ></div>
              <div className={styles["dashboard-pie-graph-legend-label"]}>
                <div
                  className={styles["dashboard-pie-graph-legend-label-heading"]}
                >
                  {label}
                </div>
                <div
                  className={styles["dashboard-pie-graph-legend-sub-heading"]}
                >
                  {chartData?.datasets[0]?.data[index].toPrecision(4)}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
