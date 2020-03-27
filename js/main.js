import { createStoreon } from './modules/storeon/index.js'
import { createRouter, routerChanged, routerKey } from './modules/storeon/router/index.js'
import { o } from './modules/sinuous/index.js'
import { Home, Blog, Post, NotFound } from './components.js'
import App from './App.js'

const routes = [
  ['/', () => ({ page: 'home', component: Home })],
  ['/blog', () => ({ page: 'blog', component: Blog })],
  ['/blog/*', id => ({ page: 'post', component: Post({ id }), id })],
  ['*', () => ({ page: 'error', component: NotFound })]
]

const store = createStoreon([createRouter(routes)])
const route = store.get()[routerKey]
console.log(route)

const view = o(route.match.component)

store.on(routerChanged, (_, data) => {
  console.log(data)
  view(data.match.component)
})

document.body.append(App(view))
