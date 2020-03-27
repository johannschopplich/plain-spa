import { o, html } from './modules/sinuous/index.js'
import { map } from './modules/sinuous/map/map.js'

const HelloMessage = ({ name }) => html`
  <h2 class="title text-4">Hello ${name}</h2>
`

export const Home = () => html`
  <${HelloMessage} name=World />
`

export const Post = props => html`
  <h2 class="title text-4">Post ${JSON.stringify(props)}</h2>
`

export const NotFound = () => html`
  <h2 class="title text-4">Not Found</h2>
`

const items = o([])
export const TodoApp = () => {
  const text = o('')

  const view = html`
    <div>
      <h2 class="title text-4">Todo List</h2>
      <${TodoList} items=${items} />
      <form onsubmit=${handleSubmit}>
        <label htmlFor="new-todo">
          What needs to be done?
        </label>
        <input
          id="new-todo"
          onchange=${e => text(e.target.value)}
          value=${text}
        />
        <button>
          Add #${() => items().length + 1}
        </button>
      </form>
    </div>
  `

  function handleSubmit (e) {
    e.preventDefault()
    if (!text().length) return

    items([...items(), { text: text(), id: Date.now() }])
    text('')
  }

  return view
}

const TodoList = ({ items }) => html`
  <ul>
    ${map(items, item => html`<li id=${item.id}>${item.text}</li>`)}
  </ul>
`
