import Layout from "../../components/Layout";
import Image from "next/image";
import styles from "../../styles/Guitarra.module.css";
// import Link from "next/link";

const Producto = ({ producto }) => {
  const { descripcion, imagen, precio, nombre, url, published_at } = producto;
  return (
    <Layout pagina={`Guitarra ${nombre}`}>
      <div>
        <div className={styles.guitarra}>
          <Image
            layout="responsive"
            width={180}
            height={350}
            src={`http://localhost:1337${imagen.url}`}
            alt={`Imagen de ${nombre}`}
          />
          <div className={styles.contenido}>
            <h3>{nombre}</h3>
            <p className={styles.resumen}>{descripcion}</p>
            <p className={styles.precio}>$ {precio}</p>

            <form className={styles.formulario}>
              <label>Cantidad</label>
              <select>
                <option value="">Seleccione</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>

              <input type="submit" value="Agregar al Carrito" />
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};
/* 
export async function getStaticPaths() {
  const newUrl = `${process.env.API_URL}/blogs`;
  const respuesta = await fetch(newUrl);
  const entradas = await respuesta.json();

  console.log(entradas);

  const paths = entradas.map((entrada) => ({
    params: { url: entrada.url },
  }));

  console.log(paths);

  return { paths, fallback: false };
}

export async function getStaticProps({ params: { url } }) {
  const newUrl = `${process.env.API_URL}/blogs?url=${url}`;
  const respuesta = await fetch(newUrl);
  const entrada = await respuesta.json();

  console.log(entrada);
  return { props: { entrada: entrada[0] } };
} */

export async function getServerSideProps({ query: { url } }) {
  const productUrl = `http://localhost:1337/guitarras?url=${url}`;
  const respuesta = await fetch(productUrl);
  const producto = await respuesta.json();

  console.log(producto);
  return { props: { producto: producto[0] } };
}

export default Producto;
