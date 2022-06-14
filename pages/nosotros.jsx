import React from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";

import styles from "../styles/Nosotros.module.css";

const Nosotros = () => {
  return (
    <Layout>
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>
        <div className={styles.contenido}>
          <Image layout="responsive" width="600" height="450" src="/img/nosotros.jpg" alt="nosotros"/>

          <div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
