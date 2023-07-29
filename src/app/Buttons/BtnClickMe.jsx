import React from "react";
import styles from "./BtnClickMe.module.scss";

const BtnClickMe = ({ text }) => {
  return <button className={styles.btn}>{text}</button>;
};

export default BtnClickMe;
