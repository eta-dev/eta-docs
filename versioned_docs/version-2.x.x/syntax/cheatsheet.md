---
id: cheatsheet
title: Cheatsheet
---

## Conditionals

```ejs
<% if (it.someval === "someothervalue") { %>
Display this!
<% } else { %>
They're not equal
<% } %>
```

## Looping over arrays

```ejs
<% users.forEach(function(user){ %>
  <%= user.first %> <%= user.last %>
<% }) %>
```

## Looping over objects

```ejs
<% Object.keys(someObject).forEach(function(prop) { %>
  <%= someObject[prop] %>
<% }) %>
```

## Logging to the console

```ejs
<% console.log("The value of it.num is: " + it.num) %>
```
