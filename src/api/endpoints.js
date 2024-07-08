const baseEndpoint = 'https://api.kinopoisk.dev'

const signUpEndpoint = '/auth/users/'
const activationEndpoint = '/auth/users/activation/'
const signInEndpoint = '/auth/jwt/create/'
const refreshJWTEndpoint = '/auth/jwt/refresh/'
const myPostsEndpoint = 'blog/posts/my_posts'

const postsEndpoint = '/v1.4/movie'
const postsSearchEndpoint = '/v1.4/movie/search'

export {
  baseEndpoint,
  signUpEndpoint,
  activationEndpoint,
  postsEndpoint,
  signInEndpoint,
  refreshJWTEndpoint,
  myPostsEndpoint,
  postsSearchEndpoint
}
