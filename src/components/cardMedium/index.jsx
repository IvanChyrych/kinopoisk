import React from 'react'
import './index.scss'
import { useDispatch } from 'react-redux'
import { setPostPreview, showModal } from '../../redux/post-preview-slice.js'
import { incrementLikes, decrementLikes, toggleFavorite, togglePopular } from '../../redux/posts-slice'
import { FeedbackControls } from '../feedBack/index'
import { Link } from 'react-router-dom'

export const CardMedium = ({ post }) => {
  const dispatch = useDispatch()

  const handleLikeClick = (event) => {
    dispatch(incrementLikes(post.id))
  }

  const handleDislikeClick = (event) => {
    dispatch(decrementLikes(post.id))
  }

  const handleFavoriteClick = (event) => {
    dispatch(toggleFavorite(post.id))
  }
  const handlePopularClick = (event) => {
    dispatch(togglePopular(post.id))
  }

  const handleImageClick = (event) => {
    event.preventDefault()
    dispatch(setPostPreview(post.image))
    dispatch(showModal())
  }
  return (
    <div className=" d-flex flex-column">
      <div className="cardMediumContainer d-flex flex-column p-2">
        <div className="d-flex">
          <Link to={`/posts/${post.id}`}>
            <div className="cardMediumTitle">
              <h4>{post.title}</h4>
            </div>
          </Link>
          <img src={post.image} alt="" className='cardMediumImage' onClick={handleImageClick} />
        </div>

        <FeedbackControls
          likes={post.likes}
          dislikes={post.dislikes}
          onLikeClick={handleLikeClick}
          onDislikeClick={handleDislikeClick}
          onFavoriteClick={handleFavoriteClick}
          isFavorite={post.isFavorite}
          onPopularClick={handlePopularClick}
          isPopular={post.isPopular}>
        </FeedbackControls>
      </div>
    </div>
  )
}
