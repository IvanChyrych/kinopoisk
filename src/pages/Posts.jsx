import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CardLarge } from '../components/cardLarge/index'
import { CardMedium } from '../components/cardMedium/index'
import { CardSmall } from '../components/cardSmall/index'
import { PostPreviewModal } from '../components/postPreviewModal/index'
import { Header } from '../components/header'
import { Title } from '../components/title/index'
import { text } from '../config/text/index'
import { PostTabs } from '../components/postTabs/index'
import { fetchPosts, changeSort } from '../../src/redux/posts-slice'
import { NavLink, useParams } from 'react-router-dom'
// import './index.scss'

export const Posts = () => {
  const [lang, setLang] = useState('en')

  function handleChangeLang (event) {
    setLang(event.target.value)
  }
  const sort = useSelector(state => state.posts.sort)
  const { page: currentPage } = useParams()
  const pagesCount = useSelector(state => state.posts.pagesCount)
  console.log(pagesCount);
  const dispatch = useDispatch()
  const activeTab = useSelector(state => state.posts.activeTab)
  const posts = useSelector(state => {
    if (activeTab === 'All') {
      return state.posts.list
    } else if (activeTab === 'Favorite') {
      return state.posts.favorites
    } else if (activeTab === 'popular') {
      return state.posts.popular
    }
    return state.posts.list
  })
  const error = useSelector(state => state.posts.error)
  const isLoading = useSelector(state => state.posts.isLoading)

  useEffect(() => {
    dispatch(fetchPosts({ page: currentPage || 1, ordering: sort }))
  }, [currentPage])

  function buildPaginationScheme () {
    const prevPageNumber = +currentPage - 1 // предполагаемая предыдущая страница, может получиться отрицательной
    const nextPageNumber = +currentPage + 1 // предполагаемая следующая страница, может получиться больше максимальной
    const scheme = [1, prevPageNumber, +currentPage, nextPageNumber, pagesCount] // строим схему
    const filteredScheme = scheme.filter(item => item > 0 && item <= pagesCount) // чистим те, которые меньше 0 или больше pagesCounter
    const set = new Set(filteredScheme) // удаляем дубли
    const result = Array.from(set) // обратно приводим к массиву

    if (result[0] + 1 !== result[1]) result.splice(1, 0, '...') // если между первым и вторым элементом пропуск, вставляем ...
    if (result.at(-2) + 1 !== result.at(-1)) result.splice(result.length - 1, 0, '...') // если между последним и предпоследним пропуск, вставляем ...

    return result
  }

  const handleChange = (event) => {
    dispatch(changeSort(event.target.value))
    dispatch(fetchPosts({ ordering: event.target.value }))
  }

  function renderPosts () {
    if (isLoading) return <div>Loading...</div>
    if (error) return <div className='alert alert-danger'>{error}</div>
    return (
      <>

        <select className="nav-select" name="select" onChange={handleChange}>
          <option value="date">Date</option>
          <option value="title">Title</option>
          <option value="text">Text</option>
          <option value="lesson_num">Lesson Number</option>
          <option defaultValue value="id">id</option>
        </select>

        <div className="d-flex w-100 justify-content-center" >
          <div className="d-block m-5">
            <Title title={text[lang].posts.title} />
            <>
              <PostTabs />
              {
                posts.map((post) => (
                  <div key={post.id} to={`/posts/${post.id}`} >
                    <div className="d-flex flex-wrap">
                      <div className="d-block m-1">
                        <CardLarge post={post} />
                      </div>
                      <div className="b-block m-1">
                        <CardMedium post={post} />
                      </div>
                      <div className="d-block m-1">
                        <CardSmall post={post} />
                      </div>
                    </div>
                  </div>
                ))
              }
            </>
          </div>
          <PostPreviewModal />
        </div>
      </>
    )
  }

  function renderPagination () {
    if (!pagesCount) return null

    const paginationScheme = buildPaginationScheme()

    return (
      <ul className="pagination">
        {paginationScheme.map((item, index) => {
          if (item === '...') {
            return (
              <li className="page-item" key={index}>
                <span className="page-link">...</span>
              </li>
            )
          }

          return (
            <li className="page-item" key={index}>
              <NavLink className="page-link" to={`/posts/pages/${item}`}>
                {item}
              </NavLink>
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <div>
      {renderPosts()}
      {renderPagination()}
    </div>
  )
}
