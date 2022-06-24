import Entrada from "../components/Entrada";
import Layout from "../components/Layout";
import styles from '../styles/Blog.module.css';

const Blog = ({ entradas }) => {
  console.log(entradas);
  return (
    <Layout pagina="Blog">
      <h1 className="heading">Blog</h1>
      <div className={styles.blog}>
        {entradas.map((entrada) => (
          <Entrada key={entrada.id} entrada={entrada}/>
        ))}
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const url = "http://localhost:1337/blogs";
  const respuesta = await fetch(url);
  const entradas = await respuesta.json();
  return { props: { entradas } };
}

export default Blog;
