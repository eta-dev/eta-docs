---
slug: what-is-embedded-js-template-engine
title: What is an Embedded JS Template Engine?
author: shadowtime2000
author_title: Maintainer
author_url: https://github.com/shadowtime2000
author_image_url: https://avatars.githubusercontent.com/u/66655515?v=4
tags: [embedded, template-engine]
---

Simply put, embedded JS template engines are template engines that allow you to write JS within delimiters of the template engine to control the data that is rendered.

## Example

Take a look at this Eta template.

```ejs
<% if (it.displayName) { %>
    Name: <%= it.displayName %>
<% } %>
```

You can see how we are writing JS in the appropriate delimiters to control what data is rendered and how it is rendered.

That's really all an embedded JS template engine is, so see you next time!