---
id: first-template
title: Your First Template
---

## [Install](install) Eta

In this guide, we'll assume that Eta is stored in a variable called `Eta`.

## Create a Template

```js
var myTemplate = 'My favorite template engine is <%= it.favorite %>.'
```

## Define Data

```js
var data = {
  favorite: 'Eta'
}
```

## Render!

```js
var result = Eta.render(myTemplate, data)
// My favorite template engine is Eta.
```

## Try Different Data

```js
var result2 = Eta.render(myTemplate, {
  favorite: 'Eta, definitely'
})
// My favorite template engine is Eta, definitely.
```

## Full Code

```js
var myTemplate = 'My favorite template engine is <%= it.favorite %>.'

var result = Eta.render(myTemplate, {
  favorite: 'Eta, definitely'
})
```
