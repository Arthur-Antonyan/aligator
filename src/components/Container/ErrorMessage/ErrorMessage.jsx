import React from 'react'

import errorSmile from '../../../assets/errorSmile.png'
import styles from './ErrorMessaage.module.css'

export default function ErrorMessage() {
  return (
    <div className={styles.errorContainer}>
      <img src={errorSmile} alt="errorSmile" className={styles.errorImg} />
      <p className={styles.errorText}>Oops, something went wrong</p>
    </div>
  )
}
