import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Image from "next/image";
import { formatearFecha } from "../../helpers/index";
import styles from "../../styles/Entrada.module.css";

const EntradaBlog = ({ entrada }) => {
  const router = useRouter();
  const { contenido, imagen, published_at, titulo } = entrada;
  return (
    <Layout>
      <main className="contenedor">
        <h1 className="heading">{titulo}</h1>
        <article className={styles.entrada}>
          <Image
            layout="responsive"
            alt={`imagen blog ${titulo}`}
            src={`${process.env.NEXT_PUBLIC_API_URL}${imagen.url}`}
            width={800}
            height={600}
          />

          <div>
            <p>{formatearFecha(published_at)}</p>
            <p className={styles.texto}>{contenido}</p>
          </div>
        </article>
      </main>
    </Layout>
  );
};

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
}

/* export async function getServerSideProps({ query: { id } }) {
  const url = `http://localhost:1337/blogs/${id}`;
  const respuesta = await fetch(url);
  const entrada = await respuesta.json();

  return { props: { entrada } };
} */

export default EntradaBlog;
