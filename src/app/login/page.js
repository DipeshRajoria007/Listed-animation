"use client";
import { useEffect, useRef, useState } from "react";
import LoginWithGoogle from "../../../components/LoginWithGoogle";
import styles from "./page.module.scss";
import Heading from "../../../components/Heading";
import LoginWithApple from "../../../components/LoginWithApple";
import Dashboard from "../dashboard/page";
import useMediaQuery from "../../../hooks/useMediaQuery";

export default function Login() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [user, setUser] = useState();
  const [hideLogin, setHideLogin] = useState(false);

  const onLogin = () => {
    setUser(JSON.parse(localStorage.getItem("user")));
    if (!isMobile) {
      leftRef.current.style.transform = "translateX(-100%)";
      rightRef.current.style.transform = "translateX(100%)";
    }
    setTimeout(() => {
      setHideLogin(true);
    }, [1000]);
  };

  useEffect(() => {
    setTimeout(() => {
      if (localStorage.getItem("user")) {
        onLogin();
      }
      if (isMobile) {
        window.location.href = "/dashboard";
      }
    }, 1500);
  }, []);

  return (
    <div className={styles["login-dashboard"]}>
      {!hideLogin && (
        <div className={styles["login-dashboard-container"]}>
          <div className={styles["login-dashboard-left-panel"]} ref={leftRef}>
            <Heading />
          </div>
          <div className={styles["login-dashboard-right-panel"]} ref={rightRef}>
            <div className={styles["login-dashboard-right-panel-content"]}>
              <h1>Sign In</h1>
              <h4>Sign in to your account</h4>
              <div
                className={styles["login-dashboard-third-party-auth-container"]}
              >
                <LoginWithGoogle onLogin={onLogin}></LoginWithGoogle>
                <LoginWithApple onLogin={onLogin}></LoginWithApple>
              </div>
              <form className={styles["login-dashboard-form"]}>
                <label className={styles["login-dashboard-input-label"]}>
                  <span>Email address</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="johndoe@gmail.com"
                  />
                </label>
                <label className={styles["login-dashboard-input-label"]}>
                  <span>Passowrd</span>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                  />
                </label>
                <a className={styles["login-dashboard-forget-password"]}>
                  Forgot password?
                </a>
                <button className={styles["login-dashboard-button"]}>
                  Sign in
                </button>
              </form>

              <div className={styles["login-dashboard-dont-have-password"]}>
                Don’t have an account? <a>Register here</a>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={styles["login-dashboard-container-final-page"]}>
        {user && <Dashboard></Dashboard>}
      </div>
    </div>
  );
}
