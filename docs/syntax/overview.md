---
id: overview
title: Syntax Overview
---

## Definitions

A template tag has the structure: `DELIMITER [WSCONTROL] [PREFIX] CONTENT [WSCONTROL] DELIMITER`.

- By default the opening delimiter is `<%` and the closing is `%>`
- `WSCONTROL` stands for whitespace control. Optionally, immediately after the opening delimiter or before the closing delimiter, you can put a `-` or a `_`. [Read more](whitespace-trimming.mdx)
- The prefix of a tag lets Eta know its type. `<% = something %>`, has `=` as the prefix, which tells Eta it's an interpolate tag.

## Syntax Overview

The data you call a template with is stored in a variable called `it`, similarly to doT.js.

- To output a value into your template, use [interpolation tags](interpolate). Put the value you want to output between (by default) your opening and closing delimeters, prefixed by a `=`.
  - Example: `<%= it.value %>`
  - Example: `<%= 2 + 4 %>`
- To output an unescaped value into your template, use [raw interpolate tags](auto-escaping). Put the value you want to output between (by default) your opening and closing delimeters, prefixed by a `~`. _Note: Eta uses `~` instead of `-` (which EJS uses) so it can support left newline trimming._
  - Example: `<%~ it.value %>`
  - Example: `<%~ "<p>HTML</p>" %>`
- [Evaluation tags](evaluate) don't have a prefix (by default) and place the code inside them into the template function.
  - Example: **comments** are written using evaluation tags (`<% /*comment */ %>`)
  - Example: conditionals are written using evaluation tags:
    ```ejs
    <% if (num === 3) { %>
      Display this
    <% } else { %>
      Display this instead
    <% } %>
    ```
- [Whitespace trimming](whitespace-trimming) is the same as in EJS (but supports trimming left newlines). Follow the opening delimiter or precede the closing delimiter with `_` or `-`.

## Helpful Tips:

- `=` and `~` don't have to come immediately following your opening delimiter. For example, `<% = 2 + 4 %>` is still valid
- The prefix `@` is a shortcode equivalent to `~E.`. \_\_Example: `<% @include("mypartial") %>` is equivalent to `<%~ E.include("mypartial") %>`

## Inspiration

Eta takes inspiration from EJS, doT.js, Mustache, Handlebars, Nunjucks, and many other great template engines. Significant chunks of its code are borrowed from [Squirrelly](https://squirrelly.js.org)
