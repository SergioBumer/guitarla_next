import styles from "../styles/Carrito.module.css";
import Layout from "../components/Layout";
import Image from "next/image";
const Carrito = ({ carrito, actualizarCantidad, eliminarProducto }) => {
  return (
    <Layout pagina={"Carrito de compras"}>
      <h1 className="heading">Carrito</h1>
      <main className={`${styles.contenido} contenedor`}>
        <div className={styles.carrito}>
          {carrito.length === 0
            ? "Carrito vacío"
            : carrito.map((producto) => (
                <div key={producto.id} className={styles.producto}>
                  <div>
                    <Image
                      layout="responsive"
                      width={250}
                      height={500}
                      src={`${process.env.NEXT_PUBLIC_API_URL}${producto.imagen}`}
                      alt={producto.nombre}
                    />
                  </div>
                  <div>
                    <p className={styles.nombre}>{producto.nombre}</p>
                    <div className={styles.cantidad}>
                      <p>Cantidad: </p>
                      <select
                        value={producto.cantidad}
                        className={styles.select}
                        onChange={(e) =>
                          actualizarCantidad({
                            cantidad: parseInt(e.target.value),
                            id: producto.id,
                          })
                        }
                      >
                        <option value="0">Seleccione</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </div>

                    <p className={styles.precio}>Precio: $ {producto.precio}</p>
                    <p className={styles.subtotal}>
                      Subtotal:{" "}
                      <span>$ {producto.precio * producto.cantidad}</span>
                    </p>
                  </div>
                  <button
                    type="button"
                    className={styles.eliminar}
                    onClick={()=>eliminarProducto(producto.id)}
                  >
                    X
                  </button>
                </div>
              ))}
        </div>
        <div>2</div>
      </main>
    </Layout>
  );
};

export default Carrito;
