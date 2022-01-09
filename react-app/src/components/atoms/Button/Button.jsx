import styles from "./Button.module.scss";
import { Link } from "react-router-dom";
import { Routing } from "../../../router/routing";


export const Button = (props) => {

  const {} = props;

  return (
    <Link to={Routing.signUp.path} className={styles.btn}>Testボタンです</Link>
  );
};
