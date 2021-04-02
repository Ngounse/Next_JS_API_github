import React, { Component } from 'react' 
import Head from 'next/head'
import style from '../../styles/Home.module.css'
import fetch from 'isomorphic-unfetch'

import styles from '../../styles/style.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils'


// export default class Github extends Component {
      
//       static async getInitialProps(){
//             const res = await fetch('https://api.github.com/users/Ngounse/repos')   
//             const data = await res.json()
//             return {repos:data}
      
//       }

      
//       render(){
//             return(
//                   <div>
//                         <p>This is pageGithub?</p>
//                         <>
//                               {
//                                     this.props.repos.map(repo => (
//                                           <Link target="_blank" href={repo.html_url}>
//                                           <a className={styles.single} ><h4>{repo.name}</h4></a>
//                                           </Link>
//                                     ))
//                               }
//                         </>
                        
//                   </div>
//             )
//       }
// }


const repoPage = ({ posts,repos }) => {
      console.log("fetch API by posts",posts)
      console.log("fetch API by postsRepo",repos)
      if (!posts) return(
          <div>Loading...
                        {/* {
                              repos.map(repo => (
                                    <Link target="_blank" href={repo.html_url} key={repo.id}>
                                    <a className={styles.single} ><h4>{repo.name}</h4></a>
                                    </Link>
                              ))
                        } */}
          </div>
        ) 
      else{
        return(
          <>
            <Head>
              <title>Next JS | Repo</title>
              <meta name="keyword" contain="nextjs"></meta>
            </Head>
              <div className="DynamicPage__container">
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
                  <p>This is repo's page</p>

                        {
                              repos.map(repo => (
                                    <Link target="_blank" href={repo.html_url}>
                                    <a className={styles.single} ><h4>{repo.name}</h4></a>
                                    </Link>
                              ))
                        }
              </div>
            </>
          )
        }
      }
      
      

      repoPage.getInitialProps = async ( {} ) => {
            const getUsername = 'gaearon'
            const resu = await fetch(`https://api.github.com/users/${getUsername}`)
            const posts = await resu.json()
            const resr = await fetch(`https://api.github.com/users/${getUsername}/repos`)
            const postsRepo = await resr.json()

            return {
                  posts,
                  repos:postsRepo,
                  fallback : false
            }
        
      }
    
      export default repoPage
      