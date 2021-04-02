import React, { Component } from 'react' 
import Head from 'next/head'
import style from '../../styles/Home.module.css'
import fetch from 'isomorphic-unfetch'

import styles from '../../styles/style.module.css'
import Link from 'next/link'
// import { loadGetInitialProps } from 'next/dist/next-server/lib/utils'



// export default class Github extends Component {

//       static async getInitialProps(){
//             const res = await fetch('https://api.github.com/users/Ngounse/following')   
//             const data = await res.json()
//             return {followings:data}
      
//       }
      
//       render(){
//             return(
//                   <div>
//                         <p>This is pageFollowing?</p>
//                         <a>
//                               {
//                                     this.props.followings.map(following => (
//                                           <Link href="#">
//                                                 <a className={styles.single}> 
//                                                       <img className="avatarSub" src={following.avatar_url}/>
//                                                       <h3>{following.login}</h3>
//                                                 </a>
//                                           </Link>
//                                     ))
//                               }
//                         </a>

//                   </div>
//             )
//       }
// }

const follwing = ({ posts,followings }) => {
      console.log("fetch API by posts",posts)
      console.log("fetch API by postsRepo",followings)
      if (!posts) return(
          <div>
                Loading...
          </div>
        ) 
      else{
        return(
          <>
            <Head>
              <title>Next JS | Followings</title>
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
                  <p>This is following's page</p>

                        {
                              followings.map(following => (
                                    <Link target="_blank" href={following.html_url} key={following.id}>
                                          <a className={styles.single}> 
                                                       <img className="avatarSub" src={following.avatar_url}/>
                                                       <h3>{following.login}</h3>
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
      
      

      follwing.getInitialProps = async ( {} ) => {
            const getUsername = 'gaearon'
            const resu = await fetch(`https://api.github.com/users/${getUsername}`)
            const posts = await resu.json()
            const reswing = await fetch(`https://api.github.com/users/${getUsername}/following`)
            const postsFollowing = await reswing.json()

            return {
                  posts,
                  followings:postsFollowing,
                  fallback : false
            }
        
      }
    
      export default follwing