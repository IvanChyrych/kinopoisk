import React from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { hideModal } from '../../redux/post-preview-slice'
import '../postPreviewModal/index.scss'

export const PostPreviewModal = () => {
  const dispatch = useDispatch()

  const currentImage = useSelector((state) => state.postPreview.currentImage)

  const isShown = useSelector((state) => state.postPreview.isShown)

  const handleCloseModal = () => {
    dispatch(hideModal())
  }

  return (
   <div className={`post-preview-modal ${isShown ? 'active' : ''}`}>
      <div className="post-preview-modal__content">
        <div className="image-container">
          <img src={currentImage} alt="post" />
        </div>
        <div className="post-preview-modal__close" onClick={handleCloseModal}>
          <IoIosCloseCircleOutline />
        </div>
      </div>
    </div>
  )
}
