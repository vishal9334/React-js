import React from 'react'
import styles from './Header.module.css'
function Header() {
  return (
    <div className={styles.header}> 
      <h3>I am dev</h3>
      <button>Login</button>
    </div>
  )
}

export default Header
