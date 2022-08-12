import Layout from "../../components/Layout";
import Image from "next/image";
import styles from "../../styles/Guitarra.module.css";
import { useState } from "react";
// import Link from "next/link";

const Producto = ({ producto, agregarCarrito }) => {
  const { descripcion, imagen, precio, nombre, url, published_at, id } =
    producto;
  const [cantidad, setCantidad] = useState(1);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (cantidad < 1) {
      alert("Cantidad no válida");
      return;
    }

    const guitarraSeleccionada = {
      id,
      imagen: imagen.url,
      nombre,
      precio,
      cantidad,
    };

    agregarCarrito(guitarraSeleccionada);
  };
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

            <form className={styles.formulario} onSubmit={handleSubmit}>
              <label>Cantidad</label>
              <select
                value={cantidad}
                onChange={(e) => setCantidad(parseInt(e.target.value))}
              >
                <option value="0">Seleccione</option>
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

  const paths = entradas.map((entrada) => ({
    params: { url: entrada.url },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params: { url } }) {
  const newUrl = `${process.env.API_URL}/blogs?url=${url}`;
  const respuesta = await fetch(newUrl);
  const entrada = await respuesta.json();

  return { props: { entrada: entrada[0] } };
} */

export async function getServerSideProps({ query: { url } }) {
  const productUrl = `http://localhost:1337/guitarras?url=${url}`;
  const respuesta = await fetch(productUrl);
  const producto = await respuesta.json();

  return { props: { producto: producto[0] } };
}

export default Producto;
