import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../../redux/posts-slice'
import './index.scss'

export const PostTabs = () => {
  const dispatch = useDispatch()
  const activeTab = useSelector(state => state.posts.activeTab)

  const handleTabClick = (tab) => {
    dispatch(setActiveTab(tab))
  }
  return (
    <div className="post-tabs">
      <button
        className={`tab ${activeTab === 'All' ? 'active' : ''}`}
        onClick={() => handleTabClick('All')}
      >
        All
      </button>
      <button
        className={`tab ${activeTab === 'Favorite' ? 'active' : ''}`}
        onClick={() => handleTabClick('Favorite')}
      >
        Favorite
      </button>
      <button
        className= {`tab ${activeTab === 'popular' ? 'active' : ''}`}
        onClick={() => handleTabClick('popular')}
      >
        Popular
      </button>
    </div>
  )
}
