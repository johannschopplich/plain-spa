import { html } from '../modules/sinuous/index.js'

export const Post = props => html`
  <h1 class="title text-4">Post</h1>
  <p>${JSON.stringify(props)}</p>
`
