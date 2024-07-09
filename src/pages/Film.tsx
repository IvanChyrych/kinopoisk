import { removePostFromRedux, fetchFilm } from '../redux/film-slice'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export function Post() {

  const { postId } = useParams()
  const dispatch = useDispatch()


  const post = useSelector(state => {
    return state.post.postBody
  })

  useEffect(() => {
    if (!(Object.keys(post).length === 0) && (post.id === postId)) {
      return
    }
    dispatch(fetchFilm(postId))

    return () => {
      dispatch(removePostFromRedux())
    }
  }, [])

  if (Object.keys(post).length === 0) {
    return (<div >Lоading</div>)
  }

  function renderPost() {
    if (!post) return <div>Loading...</div>
    return (

      <div className="d-flex  w-100 justify-content-center" >
        <div className="d-block w-50">
          <h1>{post.name}</h1>
          <img src={post.poster?.url} className='w-50' />
          <p>Страна: <b>{post.countries[0].name} </b> </p>
          <p>Год: <b>{post.year}</b> </p>
          <p>Рейтинг Кинопоиск: <b>{post.votes.kp} </b> </p>
          <p>{post.description}</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <div>{renderPost()}</div>
    </>
  )
}
