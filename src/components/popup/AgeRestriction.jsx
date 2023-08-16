import Image from "next/image";
import Router from "next/router";
import React from "react";
import styles from "./popups.module.scss";

const AgeRestriction = ({ show, setShow }) => {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <Image
          src="/images/header/logo-full.png"
          alt="img"
          width={280}
          height={74}
          layout="fixed"
          className={styles.img}
          objectFit="contain"
        />
        <h1>Are You over 21?</h1>
        <div className={styles.btnContainer}>
          <button
            onClick={() => {
              // show(false);
              sessionStorage.setItem("DontShowPopups", "true");
              setShow(false);
            }}
          >
            Yes
          </button>
          <button
            className={styles.Inbtn}
            onClick={() => {
              Router.push("https://www.google.com/");
            }}
          >
            no
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgeRestriction;
// 826
// 356
