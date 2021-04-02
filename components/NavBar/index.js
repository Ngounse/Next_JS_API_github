import React from 'react'
import Link from  'next/link'
import Style from './style.module.css'

const index=()=>{
      return(
            <div className={Style.container}>
                  <h1> Github</h1>
            <ul>
                  <li>
                        <Link href="/">
                        <a>Home</a>
                        </Link>
                  </li>
                  <li>
                        <Link href="/ninjas">
                        <a>Ninjas list </a>
                        </Link>
                  </li>
                  <li>
                        <Link href="/pageEach/materialUI">
                        <a>Material-UI</a>
                        </Link>
                  </li>
                  <li>
                        <Link href="/githubDemo">
                        <a>GithubDemo</a>
                        </Link>
                  </li>
                  <li>
                        <Link href="/github?username=ngounse/repo" as="/github/repo">
                        <a>GithubRepo</a>
                        </Link>
                  </li>
                  <li>
                        <Link href="/github/follwing?username=ngounse/follwing" as="/github/follwing">
                        <a>GithubFollwing</a>
                        </Link>
                  </li>
                  <li>
                        <Link href="/github/follwer?username=ngounse/follwer" as="/github/follwer">
                        <a>GithubFollwer</a>
                        </Link>
                  </li>
            </ul>
            </div>
      )
}

export default index