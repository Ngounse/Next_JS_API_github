// import React, { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'  
import fetch from 'isomorphic-unfetch'
import style from '../styles/Home.module.css'

  const DynamicPage = ({ posts,getUsername }) => {
  console.log("fetch API by posts",posts)
  const router = useRouter()
  console.log("username router:",router)
  console.log("username router.query:",router.query)
  console.log("???????????? getUsername",getUsername)
  const { username } = router.query

  if (!posts) return(
      <div>Loading...</div>
    ) 
  else{
    return(
      <>
        <Head>
          <title>Next JS | Dynamic</title>
          <meta name="keyword" contain="nextjs"></meta>
        </Head>
          <div className="DynamicPage__container">
              {/* <h1>{username}</h1> */}
              {/* <p>This is DynamicPage using query string?</p> */}
              <div> 
                <img className="avatar" src={posts.avatar_url} />
                <h2>{posts.login} {posts.name} </h2>
                <h4>{posts.bio}</h4>
              </div>
              <div className={style.grid} >
                <div className={style.card} >
                  <Link href={`/github/repo`} as={`/github/repo`}><a><h3>{posts.public_repos} </h3></a></Link>
                  <h3>public repos</h3>
                </div>
                <div className={style.card} >
                  <Link href="/github/follwing" as={`/github/follwer`}><a><h3>{posts.followers} </h3></a></Link>
                  <h3>Followers</h3>
                </div>
                <div className={style.card} >
                  <Link href="/github/follwer" as={`/github/follwing`} ><a><h3>{posts.following} </h3></a></Link>
                  <h3>Following</h3>
                </div>
              </div>
              <hr/>
          </div>
        </>
      )
    }
  }
  
    DynamicPage.getInitialProps = async ({ctx} ) => {
    const getUsername = 'gaearon'
    const res = await fetch(`https://api.github.com/users/${getUsername}`)
    // //call res.json() method to convert the reponse
    const posts = await res.json()
    
    return {posts,getUsername}
    
  }

  export default DynamicPage
