import React, { useEffect, useState } from 'react'
import styles from './Posts.module.css'

const Posts = (props) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    setUsers(props.state)
  }, [props])

  return (
    <div className={styles.postContainer}>
      <p className={styles.title}>{users.title}</p>
      <span className={styles.post}>{users.body}</span>
    </div>
  )
}
export default Posts
