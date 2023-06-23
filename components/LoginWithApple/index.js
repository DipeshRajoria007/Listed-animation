"use client";
import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Image from "next/image";
import styles from "./index.module.scss";
import { app } from "./../../firebase.config";

export default function LoginWithApple({ onLogin }) {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const login = async () => {
    const {
      user: { refreshToken, providerData },
    } = await signInWithPopup(firebaseAuth, provider);
    localStorage.setItem("user", JSON.stringify(providerData[0]));
    if (typeof onLogin === "function") {
      onLogin();
    }
  };

  return (
    <button onClick={login} className={styles["login-with-google-button"]}>
      <Image
        src="/assests/apple.svg"
        alt="google icon"
        width={14}
        height={14}
      />
      Sign in with Apple
    </button>
  );
}
