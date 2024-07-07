import { Title } from '../title/index'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

export function MyPost (props) {
  const list = useSelector(state => state.posts.list)

  const dispatch = useDispatch()

  if (list.length) {
    return (
      <>
        <div className={props.className} id={props.id}>
          <Link to={`/posts/${props.id}`} className="left--side">

            <Title className="title">{props.title}</Title>
          </Link>

        </div>
      </>
    )
  }
  return <div>loading</div>
}
