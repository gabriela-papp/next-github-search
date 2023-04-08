import React from 'react'

import styles from '../styles/Layout.module.css'

export const Layout = ({children}) => {
  return (
    <div className={styles.nav}>
        {children}
    </div>
  )
}
