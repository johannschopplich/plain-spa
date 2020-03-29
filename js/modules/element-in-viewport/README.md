## element-in-viewport

[![npm](https://img.shields.io/npm/v/element-in-viewport.svg)](https://www.npmjs.com/package/element-in-viewport)
[![Build Status](https://travis-ci.com/smrubin/element-in-viewport.svg?branch=master)](https://travis-ci.com/smrubin/element-in-viewport)
[![GitHub license](https://img.shields.io/github/license/smrubin/element-in-viewport.svg)](https://github.com/smrubin/element-in-viewport/blob/master/LICENSE)

An async module that resolves when an element has entered the viewport at a certain percentage, using the Intersection Observer API.

#### Install

```
npm i element-in-viewport
```

#### Usage

```
import elementInViewport from 'element-in-viewport'

;(async () => {
    const targetElement = document.querySelector('#targetElement')
    const entry = await elementInViewport(targetElement, 0)
    alert(`Intersection in Viewport Detected at IntersectionRatio ${entry.intersectionRatio}`)
})()
```
