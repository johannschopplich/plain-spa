import { html } from './modules/sinuous/index.js'

export default view => html`
  <header class="container is-sm pb-l">
    <h1 class="title text-4 py-m">Vanilla SPA</h1>
    <section>
      <ul class="p-m bg-contrast-lowest">
        <li><a href="/">Home</a></li>
        <li><a href="/todo">Todo list</a></li>
        <li><a href="/blog/post-with-name">Blog post with id</a></li>
        <li><a href="/any-link" data-ignore-router>Ignore link (the page will reload)</a></li>
        <li><a href="/not-found">404</a></li>
      </ul>
    </section>
  </header>
  <main class="container is-sm">
    ${view}
  </main>
`
