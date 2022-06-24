import { useRouter } from "next/router";

const EntradaBlog = ({ entrada }) => {
  const router = useRouter();

  return <div>EntradaBlog</div>;
};

export async function getStaticPaths() {
  const url = `http://localhost:1337/blogs`;
  const respuesta = await fetch(url);
  const entradas = await respuesta.json();

  const paths = entradas.map((entrada) => ({
    params: { id: entrada.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params: { id } }) {
  const url = `http://localhost:1337/blogs/${id}`;
  const respuesta = await fetch(url);
  const entrada = await respuesta.json();

  console.log(entrada);
  return { props: { entrada } };
}

/* export async function getServerSideProps({ query: { id } }) {
  const url = `http://localhost:1337/blogs/${id}`;
  const respuesta = await fetch(url);
  const entrada = await respuesta.json();

  console.log(entrada);
  return { props: { entrada } };
} */

export default EntradaBlog;
