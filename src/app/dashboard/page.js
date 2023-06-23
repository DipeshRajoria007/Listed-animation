"use client";
import React, { memo, useEffect, useState } from "react";
import styles from "./page.module.scss";
import { DASHBOARD_STATS, DASHBOARD_TABS } from "./constants";
import Image from "next/image";
import DashboardSatsCards from "../../../components/DashboardStatsCards";
import DashboardLineGraph from "../../../components/DashboardLineGraph";
import DashboardPieGraph from "../../../components/DashboardPieGraph";
import ScheduleCalendar from "../../../components/ScheduleCalendar";
import useMediaQuery from "../../../hooks/useMediaQuery";
import Heading from "../../../components/Heading";

function Dashboard() {
  const [user, setUser] = useState();
  const [dashboardData, setDashboardData] = useState();
  const isMobile = useMediaQuery("(max-width: 768px)");
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      window.location.href = "/login";
    } else {
      fetch("/api/dashboard", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((res) => {
          setDashboardData(res);
        })
        .catch((err) => {
          console.log(err);
        });
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  const [showHamBurger, setShowHamBurger] = useState(false);

  if (!user || !dashboardData) {
    return null;
  }
  return (
    <div className={styles["dashboard-page"]}>
      <div
        className={styles["dashboard-left-panel"]}
        onClick={() => {
          setShowHamBurger(!showHamBurger);
        }}
      >
        <h2>
          <Heading center />
        </h2>
        {isMobile && (
          <div>
            <Image
              src={showHamBurger ? "/assests/cross.png" : "/assests/more.png"}
              alt="menu"
              width={20}
              height={20}
              className={styles["dashboard-menu-icon"]}
            />
          </div>
        )}
        {(!isMobile || showHamBurger) && (
          <div className={styles["dashboard-tab-container"]}>
            {DASHBOARD_TABS.map((tab) => (
              <div key={tab.value} className={styles["dashboard-tab"]}>
                <Image
                  src={tab.iconURL}
                  alt={tab.label}
                  width={20}
                  height={20}
                />
                {tab.label}
              </div>
            ))}
          </div>
        )}
        <div className={styles["dashboard-tab-container-footer"]}>
          <a className={styles["dashboard-tab-link"]}>Help</a>
          <a className={styles["dashboard-tab-link"]}>Contact Us</a>
        </div>
      </div>

      <div className={styles["dashboard-right-panel"]}>
        <nav className={styles["dashboard-nav-bar"]}>
          <h1>Dashboard</h1>
          <div className={styles["dashboard-user-action-container"]}>
            <div className={styles["dashboard-search-input"]}>
              <input type="text" placeholder="Search" />
              <button>
                <Image
                  src="/assests/search.svg"
                  alt="search-icon"
                  width={12}
                  height={12}
                />
              </button>
            </div>
            <div className={styles["dashboard-notifcation-icon"]}>
              <Image
                src="/assests/notification.svg"
                alt="bell"
                width={20}
                height={20}
              />
            </div>
            <div
              className={styles["dashboard-user-profile"]}
              onClick={() => {
                localStorage.removeItem("user");
                window.location.href = "/login";
                window.reload();
              }}
            >
              <img src={user?.photoURL} alt="user" width={30} height={30} />
            </div>
          </div>
        </nav>
        <div className={styles["dashboard-stats-container"]}>
          {DASHBOARD_STATS.map((stat) => (
            <DashboardSatsCards
              key={stat.id}
              {...stat}
              value={dashboardData.stats[stat.id]}
            />
          ))}
        </div>
        <DashboardLineGraph chartData={dashboardData.multiLineData} />
        <div className={styles["dashboard-bottoms-graph-contianer"]}>
          <DashboardPieGraph chartData={dashboardData.pieChartData} />
          <ScheduleCalendar meetingData={dashboardData.meetingData} />
        </div>
      </div>
    </div>
  );
}

export default memo(Dashboard);
