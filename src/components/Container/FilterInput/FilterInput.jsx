import React from 'react'
import styles from './FilterInput.module.css'

export default function FilterInput({ filter, placeholder, isFilter }) {
  const filtered = isFilter ? styles.filterInput : styles.notFilterInput

  return (
    <>
      <div className={styles.inputContainer}>
        <input
          className={filtered}
          placeholder={placeholder}
          onChange={(e) => {
            filter(e)
          }}
        />
      </div>
    </>
  )
}
