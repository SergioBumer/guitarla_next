import Layout from "../components/Layout";
import Link from "next/link";
import styles from "../styles/NotFound.module.css";

const NotFound = () => {
  return (
      <div className={styles.notFound}>
        <h1>Oops! Aquí no tenemos eso...</h1>
        <Link href="/">Volver al inicio</Link>
      </div>
  );
};

export default NotFound;
