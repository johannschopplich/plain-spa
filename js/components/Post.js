import { html } from '../modules/sinuous/index.js'

export const Post = props => html`
  <h2 class="title text-4">Post ${JSON.stringify(props)}</h2>
`
