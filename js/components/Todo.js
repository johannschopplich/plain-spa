import { o, html, map } from '../modules/sinuous/index.js'

const items = o([])

const TodoList = ({ items }) => html`
  <ul>
    ${map(items, item => html`<li id=${item.id}>${item.text}</li>`)}
  </ul>
`

export const TodoApp = () => {
  const text = o('')

  const view = html`
    <div>
      <h1 class="title text-4">Todo List</h1>
      <${TodoList} items=${items} />
      <form onsubmit=${handleSubmit}>
        <label class="label" htmlFor="new-todo">
          What needs to be done?
        </label>
        <input
          id="new-todo"
          class="control mb-xs"
          onchange=${e => text(e.target.value)}
          value=${text}
        />
        <button class="button is-text">
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
