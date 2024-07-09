import React from 'react'
import './index.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setPostPreview, showModal } from '../../redux/film-preview-slice'
import { toggleFavorite } from '../../redux/films-slice'
import { FeedbackControls } from '../feedBack/index'
import { Link } from 'react-router-dom'

export const CardLarge = ({ post }) => {
  const dispatch = useDispatch()

  const handleImageClick = (event) => {
    dispatch(setPostPreview(post.poster?.url))
    dispatch(showModal())
  }

  const handleFavoriteClick = (event) => {
    dispatch(toggleFavorite(post.id))
  }

  return (
    <div className="cardLargeContainer">
      <div className="wrapper p-2">
        <div className='large__info'>
          <Link to={`/posts/${post.id}`}>
            <h2 className="text">{post.name}</h2>
          </Link>
          <div className="d-flex flex-row photo">
            <div className="photo m-1">
              <img className='cardLargeContainer__poster' src={post.poster?.url} alt={post.title} onClick={handleImageClick} />
            </div>
            <p className="description">{post.description}</p>
          </div>
        </div>

        <FeedbackControls
          onFavoriteClick={handleFavoriteClick}
          isFavorite={post.isFavorite}
        >
        </FeedbackControls>
      </div>
    </div>
  )
}
