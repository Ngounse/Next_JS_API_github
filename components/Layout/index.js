import React from 'react'
import styles from './style.module.css'
import NavBar from '../NavBar'
import Copyright from '../src/Copyright.js'

const Layout = ({children}) => {
  return(
    <>
    <div> <NavBar /></div>
    <div className={styles.container}>
          {children}
    </div>
    <div> <Copyright /></div>
    </>
  )
}

export default Layout