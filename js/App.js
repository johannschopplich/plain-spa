import { html } from './modules/sinuous/index.js'

export default view => html`
  <${Header} />
  <main>
    <div class="box" data-theme="light">
      ${view}
    </div>
  </main>
`

const Header = () => html`
  <header>
    <div class="box" data-theme="light">
      <p class="title text-4">Plain SPA</p>
      <nav>
        <ul class="stack-h">
          <li><a href="/">Home</a></li>
          <li><a href="/todo">Todo</a></li>
          <li><a href="/blog/post-with-id">Post with ID</a></li>
          <li><a href="/any-link" data-ignore-router>Ignore Router Link</a></li>
          <li><a href="/not-found">404</a></li>
        </ul>
      </nav>
    </div>
  </header>
`
