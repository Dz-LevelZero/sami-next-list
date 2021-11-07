import styles from "../../styles/Sami.module.css"
import Link from "next/link";

export const getStaticProps = async () => {

  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { samis: data }
  }

}

const Sami = ({samis }) => {
  return ( 
    <div>
      <h1>All Sami</h1>
      {samis.map(sami => (
        <Link href={"/sami/" + sami.id} key={sami.id}>
          <a className={styles.single}>
            <h3>{sami.name}</h3>
          </a>
        </Link>
      ))}
    </div>
   );
}
 
export default Sami;
