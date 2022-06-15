import Link from "next/link";
import Image from "next/image";
import { formatearFecha } from "../helpers";
import styles from "../styles/Entrada.module.css";

const Entrada = ({ entrada }) => {
  const { titulo, resumen, imagen, contenido, published_at, id } = entrada;
  return (
    <article>
      <div className={styles.contenido}>
        <Image
        layout="responsive"
          alt={`imagen blog ${titulo}`}
          src={`http://localhost:1337${imagen.url}`}
          width={800}
          height={600}
        />
        <h3>{titulo}</h3>
        <p className={styles.fecha}>{formatearFecha(published_at)}</p>
        <p className={styles.resumen}>{resumen}</p>
        <Link href={`/blog/${id}`}>
          <a className={styles.enlace}>Leer Entrada</a>
        </Link>
      </div>
    </article>
  );
};

export default Entrada;
