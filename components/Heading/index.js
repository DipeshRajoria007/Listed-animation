import React from "react";
import styles from "./index.module.scss";

export default function Heading({ center }) {
  return (
    <div
      class={styles["box"]}
      style={center ? { justifyContent: "start" } : {}}
    >
      <span>B</span>
      <span>o</span>
      <span>a</span>
      <span>r</span>
      <span>d</span>
      <span>.</span>
    </div>
  );
}
