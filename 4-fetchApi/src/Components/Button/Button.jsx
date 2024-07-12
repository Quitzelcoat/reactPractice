/* eslint-disable react/prop-types */
import styles from "./Button.module.css";

const Button = ({ type = "primary", label = "button" }) => {
  return <button className={styles[type]}>{label}</button>;
};

export default Button;
