import React from 'react'
import { BiLike, BiDislike } from 'react-icons/bi'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

export const FeedbackControls = ({ likes, dislikes, onLikeClick, onDislikeClick, onFavoriteClick, isFavorite, isPopular, onPopularClick }) => {
  const iconStyle = {
    cursor: 'pointer',
    marginRight: '8px'
  }

  const likeCounterStyle = {
    marginRight: '20px'
  }

  const feedbackControlsStyle = {
    marginBottom: '20px',
    fontSize: '20px'
  }

  const favotiteButtonStyle = {
    marginRight: '20px',
    fontSize: '25px',
    color: isFavorite ? 'gold' : 'gray'
  }

  return (
    <div className="counter-wrapper d-flex justify-content-between">
      <div className="like-dislike-counter d-flex flex-row" style={feedbackControlsStyle}>
        <div className="like-counter" style={likeCounterStyle} onClick={onPopularClick}>
          <BiLike onClick={onLikeClick} style={iconStyle} />
          <span>{likes}</span>
        </div>
        <div className="dislike-counter">
          <BiDislike onClick={onDislikeClick} style={iconStyle}/>
          <span>{dislikes}</span>
        </div>
      </div>
      <div className='favotite-button' onClick={onFavoriteClick} style={favotiteButtonStyle}>
        <button className="favorite-icon">
          {isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
        </button>
      </div>
    </div>
  )
}
