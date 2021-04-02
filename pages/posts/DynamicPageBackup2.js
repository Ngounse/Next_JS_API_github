// import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'  
import fetch from 'isomorphic-unfetch'
import NavBar from '../components/NavBar'
import Layout from '../components/Layout'


  export const DynamicPage = ({ posts }) => {
  console.log( "getAPI by porp posts",posts)
  const router = useRouter( username)
  console.log("username by router",router)
  console.log("username by router.query",router.query)
  
  const { username } = router.query

  return posts ? (
    <>
    </>
  ):(
    
    <div className="DynamicPage__container">
       <NavBar />
       <Layout>
            <h1>{username}</h1>
            <p>This is DynamicPage using query string?</p>
          {this.posts((posts, index) => (
            <>
            <div key={index} > 
              <img className="avatar" src={posts.avatar_url} />
              {/* <h2>{posts.login} ({posts.name}) </h2>
              <h4>{posts.bio}</h4> */}
              </div>
              {/* <ol><h3>
              <Link href="/github/"><ul>{posts.public_repos} public repos </ul></Link>
                <ul>{posts.followers} followers</ul>
                <ul>{posts.following} following</ul>
                </h3></ol> */}
            </>
          ))}  
            
          
          </Layout>
      </div>
      
    )
  }


  // two type of fetch 1
  export const getServerSideProps = async contain => {
    // const useUsername = contain.router.query.DynamicPage.username;
    const useUsername = contain.router.query
    const res = await fetch(`https://api.github.com/users/${useUsername}`)
    .then(res => res.json());
    //call res.json() method to convert the reponse
    // const posts = await res.json()
    const { posts } = res;
    return {prop:{posts:posts }}
  }

  // two type of fetch 2
  // export async function getStaticProps() {
  //   const res = await fetch(`https://api.github.com/users/ngounse`)
  //   const posts = await res.json()
  
  //   if (!posts) {
  //     return {
  //       notFound: true,
  //     }
  //   }
  
  //   return {
  //     props: { posts }, // will be passed to the page component as props
  //   }
  // }

  export default DynamicPage
