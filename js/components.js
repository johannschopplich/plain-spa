import { html } from './modules/sinuous/index.js'

export const Home = () => html`<h2>Home</h2>`
export const Blog = () => html`<h2>Blog</h2>`
export const Post = props => html`<h2>Post ${JSON.stringify(props)}</h2>`
export const NotFound = () => html`<h2>Not Found</h2>`
