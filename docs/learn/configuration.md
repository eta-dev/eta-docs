---
id: configuration
title: Configuring Eta
description: Setting custom delimiters, controlling caching, etc.
---

You can configure Eta using the `configure()` command, which merges the options you pass in with the current configuration.

**Example**

```js
Eta.configure({
  cache: true // Make Eta cache templates
})
```

Eta's current configuration is stored in the `config` variable (which is aliased to `defaultConfig` for backwards compatibility)

```js
Eta.config.tags // ["<%", "%>"]
```

## Big list of configuration options

Here's the TypeScript interface describing Eta's config (taken from the source code)

```ts
interface EtaConfig {
  /** Name of the data object. Default `it` */
  varName: string
  /** Configure automatic whitespace trimming. Default `[false, 'nl']` */
  autoTrim: trimConfig | [trimConfig, trimConfig]
  /** Remove all safe-to-remove whitespace */
  rmWhitespace: boolean
  /** Whether or not to automatically XML-escape interpolations. Default true */
  autoEscape: boolean
  /** Delimiters: by default `['<%', '%>']` */
  tags: [string, string]
  /** Parsing options */
  parse: {
    /** Which prefix to use for interpolation. Default `"="` */
    interpolate: string
    /** Which prefix to use for raw interpolation. Default `"~"` */
    raw: string
    /** Which prefix to use for evaluation. Default `""` */
    exec: string
  }
  /** XML-escaping function */
  e: (str: string) => string
  plugins: Array<{ processFnString?: Function; processAST?: Function }>
  /** Compile to async function */
  async: boolean
  /** Holds template cache */
  templates: Cacher<TemplateFunction>
  /** Whether or not to cache templates if `name` or `filename` is passed */
  cache: boolean
  /** Directories that contain templates */
  views?: string | Array<string>
  /** Where should absolute paths begin? Default '/' */
  root?: string
  /** Absolute path to template file */
  filename?: string
  /** Name of template file */
  name?: string
  /** Whether or not to cache templates if `name` or `filename` is passed */
  "view cache"?: boolean
  /** Make data available on the global object instead of varName */
  useWith?: boolean
  /** Function to include templates by name */
  include?: Function
  /** Function to include templates by filepath */
  includeFile?: Function
  /** Config can hold other values/methods as well */
  [index: string]: any
}
```

## Default configuration

```ts
var config: EtaConfig = {
  varName: "it",
  autoTrim: [false, "nl"],
  rmWhitespace: false,
  autoEscape: true,
  tags: ["<%", "%>"],
  parse: {
    interpolate: "=",
    raw: "~",
    exec: ""
  },
  async: false,
  templates: templates,
  cache: false,
  plugins: [],
  useWith: false,
  e: XMLEscape, // Function defined elsewhere
  include: includeHelper, // Function defined elsewhere
  includeFile: includeFileHelper // Function defined elsewhere
}
```
