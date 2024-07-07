import { ListOfMyPosts } from '../components/listOfMyPosts'
import { text } from '../config/text'
import { useSelector } from 'react-redux'
// import { ModalPost } from '../components/Modal/ModalPost'

export function MyPosts () {
  return (
    <>

    <div className="my-blog-container">
        <h1 className="title">My posts</h1>
        <div className="posts-container">
        <ListOfMyPosts></ListOfMyPosts>
        </div>
    </div>
     </>
  )
}
