import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import React ,{ useState } from 'react'
import Link from 'next/link'
// import fetch from 'isomorphic-unfetch'
import NavBar from '../components/NavBar'
import Layout from '../components/Layout'
import Button from '@material-ui/core/Button'
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
// import { loadGetInitialProps } from 'next/dist/next-server/lib/utils'

const IndexPage = ({}) => {
  const [username, setUsername] = useState('string')
  return(
    <>
      <Head>
        <title>Next JS | Home</title>
        <meta name="keyword" contain="nextjs"></meta>
      </Head>
      <div>
        <p>This is index page?</p>
          <input className="inputr"
          type="text" 
          placeholder="Input username"
          onChange={e=> setUsername(e.target.value)}
          />
          <Link href={`/DynamicPage/?username=${username}`}as={`/DynamicPage/?username=${username}`} >
            <Button variant="contained" key={username} >Search</Button>
          </Link>

          <ol>
            {/* {posts.map(post => (
              <a key={`Post_${post.login}`}>
                  <Link href="/post/[login]" as={`/post/${post.login}`}>
                    <a>{post.login}</a>
                  </Link>
              </a>
            ))} */}
          </ol>
          
      </div>
      </>
  )
}

// IndexPage.getInitialProps = async () => {
//   const res = await fetch('https://api.github.com/users/ngounse/followers')
//   // call res.json() method to convert the reponse
//   const posts = await res.json()
//   console.log("posts",posts)
//   return {posts}
// }

export default IndexPage


//  const Home = () => {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>fetch dada from aip</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <main className={styles.main}>
//         <h1 className={styles.title}>
//         fetch data <a href="http://localhost:3000/posts/a">from aip!</a>
//         </h1>
//         <div>
//             <input type="text" placeholder="...." value=""/>
//             <button>Search</button>
//         </div>
//       </main>
//     </div>
//   )
// }
// export default Home


// export default function Home(){
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>fetch dada from aip</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>
//         fetch data <a href="http://localhost:3000/posts/a">from aip!</a>
//         </h1>
//         <div>
//             <input type="text" placeholder="...." value=""/>
//             <button>Search</button>
//         </div>
//       </main>
//     </div>
//   )
// }