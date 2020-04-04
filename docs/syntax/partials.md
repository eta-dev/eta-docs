---
id: partials
title: Partials
---

## Basic Syntax

A template function is always called with [an Eta config object](../api/configuration.md), which is stored in a variable called `E`. `E` has two functions for including partials: `include` and `includeFile`.

The prefix `@` is a shortcut equivalent to `~E.` (an unescaped output tag starting with `E.`). It's only available as a prefix (right after the opening delimiter). It makes template syntax slightly cleaner.

```
<%~ E.include(name, options) %>

<% /* Equivalent to: */ %>
<% @include(name, options) %>

```

```
<%~ E.includeFile(name, options) %>
```

## Example

```ejs
<% @include('my-partial') %>
```

```ejs
<% @include('my-partial', {users: it.users}) %>
```

```
<% @includeFile('../partials/footer', {description: "Footer" }) %>
```
