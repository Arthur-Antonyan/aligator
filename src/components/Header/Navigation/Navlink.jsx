import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Navigation.module.css'

export default function Navlink(props) {
  return (
    <div className={styles.item}>
      <NavLink
        to={props.path}
        className={(data) => (data.isActive ? styles.active : '')}
      >
        {props.children}
      </NavLink>
    </div>
  )
}
