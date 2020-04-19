<p align="center">
  <img src="./img/icon.svg" alt="Logo of Plain SPA" height="114">
</p>

<h3 align="center">Plain SPA</h3>

<p align="center">
  Modern single-page application starting point deployable as-is without any bundlers<br>
</p>

<br>

## Introduction

Although I fell in love with the possibilities offered by today's libraries like Vue or React, the tooling around them throws me off sometimes. Grasping how the dependencies interact with each other. Hundreds of megabytes for transpiling all the code. Recently I had to dig deep into Webpack's internals to figure out how to omit the asset size evaluation of images inside the public folder.

If one deviates from the standard tooling, working with it quickly becomes uncomfortable.

Sine ES6+ features are available in modern browsers by default, there will be no advantage of transpiling in the future (hopefully). In service workers they are used regularly in this very moment.

I wanted to create a simple SPA with some of the glory provided by bigger frameworks, but keep the setup as simple as possible to understand what is actually happening. Plain JavaScript, runnable in the browsers without bundling or a `dist` directory to deploy.

To drop `npm` itself as a dependency, the packages in use have been imported manually into `js/modules/*`. That sure isn't best practice, but let's you clone the repository and execute it in an instant.

## Key Features

This boilerplate uses:
  - [Sinuous](https://github.com/luwes/sinuous) (≈ 1 kilobytes fast, reactive UI library),
  - [Storeon](https://github.com/storeon/storeon) (167 bytes event-based Redux-like state manager) and
  - [Storeon Router](https://github.com/storeon/router) (570 bytes modern router)
under the hood. All three tiny libraries come at cost of just 2 kilobytes combined. I chose them carefully to not reinvent the wheel after looking up a lot of lightweight UI and router libraries and came to the conclusion, that those are the finest.

For example Sinuous comes up with **tagged templates** and **observables**:

```js
import { observable, html } from './modules/sinuous/index.js'

const counter = observable(0)
const view = () => html`
  <div>Counter ${counter}</div>
`

document.body.append(view())
setInterval(() => counter(counter() + 1), 1000)
```

The app includes several example routes to show Storeon Router's capabilities.

## Bundling

> Doesn't the headline say "deployable as-is without any bundlers"?

Absolutely. The project is ready to ship for production purposes.

**However**, you can shave off some bytes and rendering time on the client-side if you compile htm syntax to hyperscript.

```js
// E.g. the following input:
html`
  <div id="foo">hello ${you}</div>
`

// becomes:
h('div', { id: 'foo' }, 'hello ', you)
```

Run `npm i && npm run build` to bundle and minify your app. I tried to decrease the tooling as much as possible. Merely 10 Megabytes (unpacked) of Node modules will be installed.

Finally change the source path to the entry script file inside `index.html` to `/js/bundle.js`.
