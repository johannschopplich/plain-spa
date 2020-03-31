import { createStoreon } from './modules/storeon/index.js'
import { createRouter, routerChanged, routerKey } from './modules/storeon/router/index.js'
import { o } from './modules/sinuous/index.js'

import { Home } from './components/Home.js'
import { Post } from './components/Post.js'
import { TodoApp } from './components/Todo.js'
import { NotFound } from './components/NotFound.js'
import App from './App.js'

const routes = [
  ['/', () => ({ page: 'home', component: Home })],
  ['/todo', () => ({ page: 'todo', component: TodoApp })],
  ['/blog/*', id => ({ page: 'post', component: Post({ id }), id })],
  ['*', () => ({ page: 'error', component: NotFound })]
]

// Create a storeon instance and fill it with routes
const store = createStoreon([createRouter(routes)])
// Get the current route
const route = store.get()[routerKey]
console.log(route)

// Render view of current route
const view = o(route.match.component)

// Update view when route has changed
store.on(routerChanged, (_, data) => {
  console.log(data)
  view(data.match.component)
})

// Render app
document.body.append(App(view))
