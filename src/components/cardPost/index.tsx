import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
// import { show, setImage } from '../redux/post-preview-slice'
// import { likeById } from '../../redux/posts-slice'

export function CardPost (props) {
  const dispatch = useDispatch()

  const handleClickImage = () => {
    dispatch(show())
    dispatch(setImage(props.image))
  }

  const handleClickLike = () => {
    dispatch(likeById(props.id))
  }

  return (
    <div className="card mb-3" style={{ maxWidth: '540px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={props.image} className="img-fluid rounded-start" alt="" onClick={handleClickImage} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <Link to={`/posts/${props.id}`} className="btn btn-primary btn-sm">Read...</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
