import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSearchPosts } from '../redux/posts-slice'
import { CardPost } from '../components/cardPost/index'

export function SearchResults () {
  const dispatch = useDispatch()
  const { query } = useParams()
  const posts = useSelector(state => state.posts.list)
  const error = useSelector(state => state.posts.error)
  const isLoading = useSelector(state => state.posts.isLoading)

  useEffect(() => {
    dispatch(fetchSearchPosts({ query: `${query}` }))
  }, [query])

  function renderPosts () {
    if (isLoading) return <div>Loading...</div>

    if (error) return <div className="alert alert-danger">{error}</div>

    return posts.map(post => <CardPost key={post.id} id={post.id} title={post.name} text={post.body} image={post.image} />)
  }

  return (
    <div>
      <h1>Search results for «{query}»</h1>
      {renderPosts()}
    </div>
  )
}
