import React from 'react'
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'
import styles from '../styles/Products.module.css'
import { useSelector } from 'react-redux'

const pagesCount=5
const currentPage=5

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

const Sidebar = () => {
  const { list } = useSelector(({ Products }) => Products)

  return (
    <section className={styles.sidebar}>
      {/* <div className={styles.title}>
        Products
      </div> */}
      <nav>
        <ul className={styles.menu}>
          {list?.docs.map(({ id, name, poster, limit }) => (
            <li key={id}>
              <NavLink to={`/products/${id}`}>
                <div className={styles.productsItemWrapper}>
                  <div className="products-poster">
                    <img width='200' src={poster?.url} alt="" />
                  </div>
                  <div className="mt-5">{name}</div>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
        {renderPagination ()}
      </nav>
    </section>
  )
}


function renderPagination() {
  if (!pagesCount) return null

  const paginationScheme = buildPaginationScheme()

  return (
    <ul className={styles.pagination}>
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



export default Sidebar
