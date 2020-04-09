module.exports = {
  docs: {
    'Get Started': [
      'get-started/overview',
      'get-started/install',
      'get-started/security',
      'get-started/first-template'
    ],
    'Template Syntax': [
      'syntax/overview',
      'syntax/cheatsheet',
      'syntax/async',
      'syntax/interpolate',
      'syntax/auto-escaping',
      'syntax/evaluate',
      'syntax/partials',
      'syntax/whitespace-control'
    ],
    API: [
      'api/overview',
      'api/rendering',
      'api/compilation',
      'api/configuration',
      'api/file-handling',
      'api/parsing',
      'api/templates-partials'
    ]

    // add custom tags, how-to caching, etc.
  },
  about: [
    'about/introduction',
    'about/eta-vs-ejs',
    'about/why-eta',
    'about/performance',
    'about/FAQ',
    'about/how-eta-works'
  ],

  // add custom tags, how-to caching, etc.
  Learn: [
    {
      type: 'category',
      label: 'Learn',
      items: ['learn/async', 'learn/interactive'] // TODO: add tutorials on plugins, etc.
    },
    {
      type: 'category',
      label: 'Resources',
      items: ['resources/integrations']
    }
  ]

  // add custom tags, how-to caching, etc.
}
