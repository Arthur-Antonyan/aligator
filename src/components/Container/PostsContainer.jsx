import React, { useEffect, useState } from 'react'

import Posts from './Posts/Posts'
import styles from './PostsContainer.module.css'
import userApi from '../../api/api'
import FilterInput from './FilterInput/FilterInput'
import Preloader from '../Preloader/Preloader'
import ErrorMessage from './ErrorMessage/ErrorMessage'

function PostsContainer() {
  const [defaultState, setDefaultState] = useState([])
  const [filteredState, setFilteredState] = useState([])
  const [isFetching, setIsFetching] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    userApi.getUsers(setDefaultState, setIsFetching, setError)
  }, [setDefaultState, setIsFetching, setError])

  useEffect(() => {
    setFilteredState(defaultState)
  }, [defaultState])

  const filter = (e) => {
    setFilteredState(
      defaultState.filter((item) => item.title.includes(e.target.value)),
    )
  }

  if (error) return <ErrorMessage />

  return (
    <>
      <FilterInput filter={filter} placeholder="filter" isFilter={true} />
      <div className={styles.container}>
        {filteredState.map((item) => (
          <Posts key={item.id} state={item} />
        ))}
      </div>
      {isFetching && <Preloader />}
    </>
  )
}

export default PostsContainer
