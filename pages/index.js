import Head from 'next/head'
import styles from '../styles/Home.module.css'
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
      </div>
      </>
  )
}

export default IndexPage