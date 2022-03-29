import React from 'react'

import logo from '../../../assets/logo'
import styles from './Logo.module.css'

export default function Logo() {
  return (
    <div className={styles.logo}>
      <img src={logo()} alt="logo" className={styles.logoImage} />
    </div>
  )
}
