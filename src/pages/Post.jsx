import { removePostFromRedux, fetchPost } from '../redux/post-slice'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Header } from '../components/header/index'

export function Post () {
  const [lang, setLang] = useState('en')
  const { postId } = useParams()
  const dispatch = useDispatch()

  function handleChangeLang (event) {
    setLang(event.target.value)
  }

  const post = useSelector(state => {
    return state.post.postBody
  })

  useEffect(() => {
    if (!(Object.keys(post).length === 0) && (post.id === postId)) {
      return
    }
    dispatch(fetchPost(postId))

    return () => {
      dispatch(removePostFromRedux())
    }
  }, [])

  if (Object.keys(post).length === 0) {
    return (<div >Lоading</div>)
  }

  function renderPost () {
    if (!post) return <div>Loading...</div>
    return (

      <div className="d-flex  w-100 justify-content-center" >
        <div className="d-block w-50">
          <p>{post.name}</p>
          <img src={post.image} alt="" width={300} />
          <div className="lead">{post.text}</div>
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
