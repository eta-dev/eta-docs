---
id: eta-vs-ejs
title: Eta vs EJS
---

Eta's syntax is very similar to EJS' (most templates should work with either engine), Eta has a similar API, and Eta and EJS share the same file-handling logic. Here are the differences between Eta and EJS:

- Eta is more lightweight. Eta weighs around **2KB gzipped**, while EJS is **4.4KB gzipped**
- Eta compiles and renders templates **_much_ faster than EJS**. Check out these benchmarks: https://ghcdn.rawgit.org/eta-dev/eta/694976ffcfbe5fc2e5ae3f891549849a3bba9fdd/browser-tests/benchmark.html
- Eta allows left whitespace control (with `-`), something that doesn't work in EJS because EJS uses `-` on the left side to indicate that the value shouldn't be escaped. Instead, Eta uses `~` to output a raw value
- Eta gives you more flexibility with delimeters -- you could set them to `{{` and `}}`, for example, while with EJS this isn't possible
- Eta adds plugin support
- Comments in Eta use `/* ... */` which allows commenting around template tags and is more consistent
- Eta parses strings correctly. _Example: `<%= "%>" %>` works in Eta, while it breaks in EJS_
- Eta exposes Typescript types and distributes a UMD build
- Custom tag-type prefixes. _Example: you could change `<%=` to `<%*`_
