import React from 'react'

import styles from './PostsHeader.module.css'

export default function PostsHeader({ logo, lang }) {
  return (
    <div className={styles.container}>
      <img className={styles.logoImg} src={logo} alt={lang + ' img'} />
      <p>Posts about {lang}</p>
    </div>
  )
}
