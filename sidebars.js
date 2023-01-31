module.exports = {
  docs: {
    Overview: ["docs-overview"],
    "Template Syntax": [
      "syntax/overview",
      "syntax/cheatsheet",
      "syntax/async",
      "syntax/interpolate",
      "syntax/auto-escaping",
      "syntax/evaluate",
      "syntax/partials",
      "syntax/whitespace-control",
      "syntax/caveats"
    ],
    API: [
      "api/overview",
      "api/rendering",
      "api/compilation",
      "api/configuration",
      "api/file-handling",
      "api/parsing",
      "api/templates-partials",
      "api/containers",
      "api/plugin-hooks"
    ]

    // add custom tags, how-to caching, etc.
  },
  about: [
    "about/overview",
    "about/eta-vs-ejs",
    "about/why-eta",
    "about/performance",
    "about/FAQ",
    "about/how-eta-works"
  ],

  // add custom tags, how-to caching, etc.
  learn: [
    {
      type: "category",
      label: "Learn",
      items: [
        "learn/overview",
        "learn/install",
        "learn/security",
        "learn/first-template",
        "learn/partials",
        "learn/layouts",
        "learn/configuration",
        "learn/plugins",
        "learn/file-handling",
        "learn/async"
      ], // TODO: add tutorials on plugins, etc.
      collapsed: false
    },
    {
      type: "category",
      label: "Examples",
      items: [
        "examples/overview",
        "examples/express",
        "examples/node",
        "examples/deno",
        "examples/bun"
      ],
      collapsed: false
    },
    {
      type: "category",
      label: "Resources",
      items: [
        "resources/overview",
        "resources/integrations",
        "resources/tutorials-and-articles"
      ],
      collapsed: false
    }
  ]

  // add custom tags, how-to caching, etc.
}
