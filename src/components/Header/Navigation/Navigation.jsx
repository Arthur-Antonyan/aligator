import React from 'react'

import FilterInput from '../../Container/FilterInput/FilterInput'
import Navlink from './Navlink'
import styles from './Navigation.module.css'

export default function Navigation() {
  const filter = (e) => {
    const filterValue = e.target.value
  }

  return (
    <div className={styles.navContent}>
      <nav className={styles.navigation}>
        <Navlink path="js">JavaScript</Navlink>
        <Navlink path="vue">Vue.js</Navlink>
        <Navlink path="react">React</Navlink>
        <Navlink path="angular">Angular</Navlink>
        <Navlink path="css">CSS</Navlink>
        <Navlink path="gatsby">Gatsby</Navlink>
      </nav>
      <div className={styles.searchBar}>
        <FilterInput placeholder="live search" filter={filter} />
      </div>
    </div>
  )
}
