import Link from "next/link";
import Curso from "../components/Curso";
import Layout from "../components/Layout";
import Listado from "../components/Listado";

export default function Home({ guitarras, cursos }) {
  return (
    <Layout pagina="Inicio" guitarra={guitarras[0]}>
      <main className="">
        <h1 className="heading">Nuestra colección</h1>
        <Listado guitarras={guitarras} />
        <Curso cursos={cursos} />
      </main>
    </Layout>
  );
}

export async function getServerSideProps({}) {
  const urlGuitarras = `${process.env.API_URL}/guitarras?_sort=precio:asc`;
  const urlCursos = `${process.env.API_URL}/cursos`;

  const [resGuitarras, resCursos] = await Promise.all([
    fetch(urlGuitarras), fetch(urlCursos)
  ])

  const [guitarras, cursos] = await Promise.all([
    resGuitarras.json(), resCursos.json()
  ])

  return { props: { guitarras, cursos } };
}
