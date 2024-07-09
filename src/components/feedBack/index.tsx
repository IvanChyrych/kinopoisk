import React from 'react'
import { BiLike, BiDislike } from 'react-icons/bi'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

export const FeedbackControls = ({  onFavoriteClick, isFavorite }) => {
  const iconStyle = {
    cursor: 'pointer',
    marginRight: '8px'
  }

  const favotiteButtonStyle = {
    marginRight: '20px',
    fontSize: '25px',
    color: isFavorite ? 'gold' : 'gray'
  }

  return (
    <div className="counter-wrapper d-flex justify-content-between">
      <div className='favotite-button' onClick={onFavoriteClick} style={favotiteButtonStyle}>
        <button className="favorite-icon">
          {isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
        </button>
      </div>
    </div>
  )
}
