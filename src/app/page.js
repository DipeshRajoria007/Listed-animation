"use client";
import styles from "./page.module.css";

export default function Home() {
  const clickHandler = () => {
    window.location.href = "/login";
  };
  return (
    <div className={styles.bg}>
      <h1 className={styles.title}>
        Welcome to this website! <br />
        <br />
        It has been created as part of a technical assignment, designed
        specifically for the frontend developer role. This assignment serves as
        an opportunity to showcase skills and expertise in the field of frontend
        development.
        <br />
        <br />
        In this version of assignment, I have added little animation after
        Signing in with google, So pay attention ! Thank You !!
      </h1>
      <button onClick={clickHandler} className={styles.button}>
        Go to SignIn / SignUp Page
      </button>
    </div>
  );
}
