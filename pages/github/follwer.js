import React, { Component } from 'react' 
import Head from 'next/head'
import style from '../../styles/Home.module.css'
import fetch from 'isomorphic-unfetch'

import styles from '../../styles/style.module.css'
import Link from 'next/link'

// export default class Github extends Component {
//       static async getInitialProps(){
//             const res = await fetch('https://api.github.com/users/Ngounse/followers')   
//             const data = await res.json()
//             return {repos:data}
      
//       }
      
//       render(){
//             return(
//                   <div>
//                         <p>This is pageFollwer?</p>
//                         <ul>
//                               {
//                                     this.props.repos.map(repo => (
//                                           <Link href="#">
//                                                 <a className={styles.single} > 
//                                                       <img className="avatarSub" src={repo.avatar_url}/>
//                                                       <h3>{repo.login}</h3>
//                                                 </a>
//                                           </Link>
//                                     ))
//                               }
//                         </ul>
//                   </div>
//             )
//       }
// }

const follower = ({ posts,followers }) => {
      console.log("fetch API by posts",posts)
      console.log("fetch API by postsRepo",followers)
      if (!posts) return(
          <div>
                Loading...
          </div>
        ) 
      else{
        return(
          <>
            <Head>
              <title>Next JS | Follower</title>
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
                  <p>This is follower's page</p>

                        {
                              followers.map(follower => (
                                    <Link target="_blank" href={follower.html_url} >
                                          <a className={styles.single} key={follower.id}> 
                                                       <img className="avatarSub" src={follower.avatar_url}/>
                                                       <h3>{follower.login}</h3>
                                          </a>
                                    {/* <a className={styles.single} ><h4>{following.name}</h4></a> */}
                                    </Link>
                              ))
                        }
              </div>
            </>
          )
        }
      }
      
      follower.getInitialProps = async ( {} ) => {
            const getUsername = 'gaearon'
            const resu = await fetch(`https://api.github.com/users/${getUsername}`)
            const posts = await resu.json()
            const reswer = await fetch(`https://api.github.com/users/${getUsername}/followers`)
            const postsFollowers = await reswer.json()

            return {
                  posts,
                  followers:postsFollowers,
                  fallback : false
            }
        
      }
    
      export default follower