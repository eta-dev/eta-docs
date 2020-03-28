module.exports = {
  docs: {
    Eta: [
      {
        type: 'category',
        label: 'About',
        items: [
          'about/introduction',
          'about/eta-vs-ejs',
          'about/why-eta',
          'about/performance',
          'about/FAQ',
          'about/how-eta-works'
        ]
      },
      {
        type: 'category',
        label: 'Learn',
        items: ['learn/async'] // TODO: add tutorials on plugins, etc.
      },
      {
        type: 'category',
        label: 'Resources',
        items: ['resources/integrations']
      },
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
  }
}
