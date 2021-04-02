import styles from '../../styles/style.module.css'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import style from '../../styles/Home.module.css'

export const getStaticProps = async ()=>{
      const res = await fetch ("https://api.github.com/users/Ngounse")
      const readData = await res.json()

      return {
            props:{ users: readData}
      }
}

const GithubDemo = ({ users }) => {
      console.log(users)
      return(
            <div>
            <h1>Public index</h1>
            {
                  <Link href={'/githubDemo/' + users.login } key={users.id}>
                        <>
                        {/* <a className={styles.single} > */}
                        <img className="avatar" src={users.avatar_url} />
                        <h3>{users.login}</h3>
                        <p>{users.bio}</p>
                        <div className={style.grid}>
                              <div className={style.card}>
                                    <h3>{users.public_repos}</h3>
                                    <h3><Link href={'/repos/' + users.login}> Public repos </Link></h3>
                              </div>
                              <div className={style.card}>
                                    <h3>{users.followers}</h3>
                                    <h3><Link href={'/followers/' + users.login}> Followers </Link></h3>
                              </div>
                              <div className={style.card}>
                                    <h3>{users.following}</h3>
                                    <h3><Link href={'/following/' + users.login}> Following </Link></h3>
                              </div>
                        </div>
                  {/* <Link href={'/ninjas/' + ninja.id } key={ninja.id}> */}
                        {/* </a> */}
                        </>
                  </Link>
            }
            </div>
            
      )
}

export default GithubDemo