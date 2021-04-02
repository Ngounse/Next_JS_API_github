import styles from '../../styles/style.module.css'
import Link from 'next/link'

export const getStaticProps = async ()=>{
      const res = await fetch ("https://jsonplaceholder.typicode.com/users")
      const readData = await res.json()

      return {
            props:{ ninjas: readData}
      }
}

const Ninjas = ({ ninjas }) => {
      return(
            <div>
            <h1>All ninjas</h1>
            {ninjas.map(ninja=> (
                  <Link href={'/ninjas/' + ninja.id } key={ninja.id}>
                        <a className={styles.single}>
                        <h3>{ninja.name}</h3>
                        </a>
                  </Link>
            ))}
            </div>
            
      )
}

export default Ninjas