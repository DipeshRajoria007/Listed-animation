import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";

export default function ScheduleCalendar({ meetingData }) {
  return (
    <div className={styles["dashboard-schedule-calendar-container"]}>
      <nav>
        <h2>Today’s schedule</h2>
        <div>
          See All{" "}
          <Image
            src="/assests/right-arrow.svg"
            width={10}
            height={10}
            alt="arrow right"
          />
        </div>
      </nav>
      <div className={styles["dashboard-schedule-calendar-content"]}>
        {meetingData.map((meeting) => (
          <div
            className={
              styles[
                meeting.isPast
                  ? "dashboard-schedule-calendar-card"
                  : "dashboard-schedule-calendar-card-active"
              ]
            }
            key={meeting.title}
          >
            <h3>{meeting.title}</h3>
            <div>{meeting.time}</div>
            <div>{meeting.location}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
