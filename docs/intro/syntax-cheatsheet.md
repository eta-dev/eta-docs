---
id: syntax-cheatsheet
title: Syntax Cheatsheet
---

## Conditionals

```eta
<% if (it.someval === "someothervalue") { %>
Display this!
<% } else { %>
They're not equal
<% } %>
```

## Looping over arrays

```eta
<% users.forEach(function(user){ %>
  <%= user.first %> <%= user.last %>
<% }) %>
```

## Looping over objects

```eta
<% Object.keys(someObject).forEach(function(prop) { %>
  <%= someObject[prop] %>
<% }) %>
```

## Logging to the console

```eta
<% console.log("The value of it.num is: " + it.num) %>
```

## Async Partials

```eta
<%~ await includeAsync("./path-to-partial") %>
```
