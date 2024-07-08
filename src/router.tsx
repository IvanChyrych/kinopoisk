import { createBrowserRouter } from 'react-router-dom'
import { Posts } from './pages/Posts'
import { Post } from './pages/Post'
import { Cart } from './pages/Cart'
import { Layout } from './components/layout/index'
import { SearchResults } from './pages/SearchResults'



export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Posts />
      },
      {
        path: '/posts/pages/:page/',
        element: <Posts />
      },
      {
        path: '/posts/search/:query',
        element: <SearchResults />
      },
      {
        path: '/posts/:postId',
        element: <Post />
      },
      {
        path: '/cart/',
        element: <Cart />
      }
    ]
  }
])
