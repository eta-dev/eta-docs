---
id: partials
title: Partials
---

## Basic Syntax

A template function is always called with [an Eta config object](../api/configuration.md), which is stored in a variable called `E`. `E` has two functions for including partials: `include` and `includeFile`.

```
<%~ E.include(name, options) %>
```

```
<%~ E.includeFile(name, options) %>
```

## Example

```ejs
<%~ E.include('my-partial') %>
```

```ejs
<%~ E.include('my-partial', {users: it.users}) %>
```

```
<%~ E.includeFile('../partials/footer', {description: "Footer" }) %>
```
