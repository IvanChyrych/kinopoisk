import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function SearchForm () {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  function handleChangeSearch (event) {
    setSearch(event.target.value)
  }

  function handleSubmit (event) {
    event.preventDefault()
    navigate(`/posts/search/${search}`)
  }

  return (
    <form className="d-flex align-items-center ms-5" role="search" onSubmit={handleSubmit}>
      <input type="search" className="form-control me-1" placeholder="Search..." style={{ width: '200px' }} onChange={handleChangeSearch} value={search} />
      <button type="submit" className="btn btn-warning">Run</button>
    </form>
  )
}
