import { html } from '../modules/sinuous/index.js'

const HelloMessage = ({ name }) => html`
  <h2 class="title text-4">Hello ${name}</h2>
`

export const Home = () => html`
  <${HelloMessage} name=World />
`
