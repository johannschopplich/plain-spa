import { o, html, map } from '../modules/sinuous/index.js'

export const TodoApp = () => {
  const text = o('')
  let items = o([])

  const stored = localStorage.getItem('app.todo')
  if (stored) items = o(JSON.parse(stored))

  const view = html`
    <style>
      .control {
        margin-bottom: var(--space-xs);
      }
    </style>

    <div>
      <h1 class="title text-4">Todo List</h1>
      <${TodoList} items=${items} />
      <form onsubmit=${handleSubmit}>
        <label class="label" htmlFor="new-todo">
          What needs to be done?
        </label>
        <input
          id="new-todo"
          class="control"
          onchange=${e => text(e.target.value)}
          value=${text}
        />
        <button class="button is-primary is-outlined">
          Add #${() => items().length + 1}
        </button>
      </form>
    </div>
  `

  function handleSubmit (e) {
    e.preventDefault()
    if (!text().length) return

    items([...items(), { text: text(), id: Date.now() }])
    localStorage.setItem('app.todo', JSON.stringify(items()))
    text('')
  }

  return view
}

const TodoList = ({ items }) => html`
  <ul>
    ${map(items, item => html`<li id=${item.id}>${item.text}</li>`)}
  </ul>
`
