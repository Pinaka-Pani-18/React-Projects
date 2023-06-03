/* eslint-disable react/prop-types */
import styles from "./Button.module.css";
const Button = (props) => {
  let { text, icon, color } = props;
  return (
    <button className={color ? styles.secondaryBtn : styles.primaryBtn}>
      {icon}
      {text}
    </button>
  );
};

export default Button;
