import React from "react";
import styles from "./BtnClickMe.module.scss";
import Link from "next/link";

const BtnClickMe = ({ text }) => {
  return (
    <Link className={styles.btn} href="https://oddball.be/" target="_blank">
      {text}
    </Link>
  );
};

export default BtnClickMe;
