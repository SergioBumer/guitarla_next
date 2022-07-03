import Layout from "../components/Layout";
import Listado from "../components/Listado";

const tienda = ({ guitarras }) => {
  console.log(guitarras);
  return (
    <Layout pagina="Tienda Virtual">
      <main>
        <h1 className="heading">Nuestros Productos</h1>
        <Listado className="contenedor" guitarras={guitarras} />
      </main>
    </Layout>
  );
};

export async function getServerSideProps({ query: { id } }) {
  const url = `${process.env.API_URL}/guitarras?_sort=precio:asc`;
  const respuesta = await fetch(url);
  const guitarras = await respuesta.json();

  return { props: { guitarras } };
}
export default tienda;
