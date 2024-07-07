import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMyPosts } from '../../redux/posts-slice'
import { MyPost } from '../../components/post/MyPost'
// import './ListOfMyPost.scss'

export function ListOfMyPosts () {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts.list)
  const isLoading = useSelector(state => state.posts.isLoading)

  useEffect(() => {
    dispatch(fetchMyPosts())
  }, [])

  const renderPost = ({ id, date, title, text, image, likes, dislikes }) => {
    if (isLoading) {
      return <div>Loading...</div>
    }
    const imageSrc = { backgroundImage: `url(${image})` }
    return <MyPost className="post" key={id} id={id} date={date} title={title} text={text} imageSrc={imageSrc} likes={likes} dislikes={dislikes} postsType='myPosts'></MyPost>
  }

  const renderPostsPage = () => {
    if (posts) {
      return posts.map(renderPost)
    }
  }

  return renderPostsPage()
}
