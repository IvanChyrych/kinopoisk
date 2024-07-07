import React from 'react'
import './index.scss'
import { useDispatch } from 'react-redux'
import { setPostPreview, showModal } from '../../redux/post-preview-slice.js'
import { FeedbackControls } from '../feedBack/index'
import { incrementLikes, decrementLikes, toggleFavorite, togglePopular } from '../../redux/posts-slice'
import { Link } from 'react-router-dom'

export const CardSmall = ({ post }) => {
  const dispatch = useDispatch()

  const handleImageClick = (event) => {
    dispatch(setPostPreview(post.image))
    dispatch(showModal())
  }

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

  return (
    <>
      <div className="cardSmallContainer d-flex flex-column ">
      <Link to={`/posts/${post.id}`}>
        <h6>{post.title}</h6>
        </Link>
        <img src={post.image} alt="" className='cardSmallImage' onClick={handleImageClick} />
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

    </>
  )
}
