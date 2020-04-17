import { html } from './modules/sinuous/index.js'

export default view => html`
  <${Header} />
  <main class="box block is-" data-theme="light">
    ${view}
  </main>
`

const Header = () => html`
  <header class="box mb-xs" data-theme="light">
    <p class="title text-4">Vanilla SPA</p>
    <nav>
      <ul class="flow-h">
        <li><a href="/">Home</a></li>
        <li><a href="/todo">Todo</a></li>
        <li><a href="/blog/post-with-name">Article with ID</a></li>
        <li><a href="/any-link" data-ignore-router>Ignore Router Link</a></li>
        <li><a href="/not-found">404</a></li>
      </ul>
    </nav>
  </header>
`
