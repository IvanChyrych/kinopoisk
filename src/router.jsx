import { createBrowserRouter } from 'react-router-dom'
import { Main } from './pages/Main'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Posts } from './pages/Posts'
import { Post } from './pages/Post'
import { Layout } from './components/layout/index'
import { UserActivation } from '../src/pages/UserActivation'
import { Success } from '../src/pages/Success'
import { MyPosts } from './pages/MyPosts'
import { SearchResults } from '../src/pages/SearchResults'
import { NewPost } from '../src/pages/NewPost'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Main />
      },
      {
        path: '/auth/signin',
        element: <SignIn />
      },
      {
        path: '/auth/signup',
        element: <SignUp />
      },
      {
        path: '/auth/activate/:uid/:token',
        element: <UserActivation />
      },
      {
        path: '/auth/activate/success',
        element: <Success />
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
        path: '/posts/my',
        element: <MyPosts></MyPosts>
      },
      {
        path: '/posts/:postId',
        element: <Post />
      },
      {
        path: '/posts/new',
        element: <NewPost />
      }
    ]
  }
])
