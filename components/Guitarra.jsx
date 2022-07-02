import Image from "next/image";
import Link from "next/link";

const Guitarra = ({ guitarra }) => {
  const { descripcion, imagen, precio, nombre, url } = guitarra;

  return (
    <div>
      <Image
        layout="responsive"
        width={500}
        height={350}
        src={`http://localhost:1337${imagen.url}`}
        alt={`Imagen de ${nombre}`}
      />
      <div>
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <p>$ {precio}</p>
        <Link href={`/guitarras/${url}`}>Ver</Link>
      </div>
    </div>
  );
};

export default Guitarra;
