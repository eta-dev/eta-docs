import React from 'react'
import Layout from '@theme/Layout'
import styles from './index.module.css'
import datStyles from './dat-gui.module.css'
import CodeBlock from '@theme/CodeBlock'
import Ace from 'react-ace'

// Below so it doesn't err on build
const Editor = props => {
  if (typeof window !== 'undefined') {
    require('ace-builds/src-noconflict/mode-ejs')
    require('ace-builds/src-noconflict/theme-monokai')

    return <Ace {...props} />
  }

  return null
}

class AceEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = { mounted: false }
  }

  componentDidMount() {
    this.setState({ mounted: true })
  }

  render() {
    return this.state.mounted ? <Editor {...this.props} /> : null
  }
}

import * as Eta from 'eta'

import DatGui, { DatBoolean, DatSelect, DatString } from 'react-dat-gui'

import 'react-dat-gui/dist/index.css'

Eta.templates.define(
  'mypartial',
  Eta.compile('Partial content: the value of `num` is <%= it.num %>')
)

var initialTemplate = `OK, so have fun! :D
-------------------
<%
    var fruits = ["Apple", "Pear", "Orange", "Lemon"]
      , random = " ".repeat(18).split("").map(x => Math.random())
%>

These fruits are amazing:
<% for(var i = 0; i < fruits.length; ++i) {%>

  - <%=fruits[i]%>s<% } %>


Let's see some random numbers:

<% random.forEach((c, i) => {
%> <%=c.toFixed(10) + ((i + 1) % 6 === 0 ? "\\n": "") %><%});%>

You can put any JS inside tags:
-------------------------------

2+4 = <%= 2+4 %>

<% /* This template is rendered with the following data:

var renderData = {
  number: 78,
  five: function() { return 5 },
  arr: ['one', 'two', 'three', 'four'],
  obj: {
    key1: 'val1',
    key2: 'val2',
    key3: 'val3'
  },
  users: [{ name: 'Ben', job: 'Maintainer' },
    { name: 'Joe', job: 'Maintainer' }]
}

and 1 partial, "mypartial"
*/ %>

Call functions
--------------
<%= it.five() %>


Display arrays
--------------
<%= it.arr.join() %>
`

var renderData = {
  number: 78,
  five: function() {
    return 5
  },
  arr: ['one', 'two', 'three', 'four'],
  obj: {
    key1: 'val1',
    key2: 'val2',
    key3: 'val3'
  },
  users: [
    { name: 'Ben', job: 'Maintainer' },
    { name: 'Joe', job: 'Maintainer' }
  ]
}

class Playground extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      template: initialTemplate,
      functionString: Eta.compile(initialTemplate).toString(),
      templateResult: Eta.render(initialTemplate, renderData),
      config: {
        autoEscape: true,
        tagOpen: '<%',
        tagClose: '%>',
        display: 'result'
      },
      err: false
    }
    this.handleTemplateChange = this.handleTemplateChange.bind(this)
    this.handleConfigUpdate = this.handleConfigUpdate.bind(this)
  }

  handleTemplateChange(newvalue) {
    console.log('newvalue\n============')
    console.log(newvalue)
    this.setState(
      {
        template: newvalue
      },
      function() {
        var functionString = ''
        var templateResult = ''
        var err = false
        var customConfig = {
          autoEscape: this.state.config.autoEscape,
          tags: [this.state.config.tagOpen, this.state.config.tagClose]
        }
        // console.log(customConfig)
        try {
          functionString = Eta.compile(
            this.state.template,
            customConfig
          ).toString()
          console.log(functionString)

          templateResult = Eta.render(
            this.state.template,
            renderData,
            customConfig
          )
          console.log(templateResult)
        } catch (ex) {
          console.log('Err!')
          console.log(ex.stack)
          err = ex.stack
        }

        this.setState({
          functionString: functionString,
          templateResult: templateResult,
          err: err
        })
      }
    )
  }

  handleConfigUpdate(newData) {
    this.setState(
      prevState => ({
        config: { ...prevState.config, ...newData }
      }),
      () => {
        this.handleTemplateChange(this.state.template)
      }
    )
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.state.template === nextState.template &&
      this.state.functionString === nextState.functionString &&
      this.state.err === nextState.err &&
      this.state.templateResult === nextState.templateResult &&
      this.state.config === nextState.config
    ) {
      return false
    } else {
      return true
    }
  }

  // updateEtaResults() {

  // }

  render() {
    return (
      <div className={styles.playground}>
        <DatGui
          data={this.state.config}
          onUpdate={this.handleConfigUpdate}
          className={datStyles['react-dat-gui']}
        >
          <DatBoolean path='autoEscape' label='autoEscape' />
          <DatString path='tagOpen' label='tagOpen' />
          <DatString path='tagClose' label='tagClose' />
          <DatSelect
            path='display'
            options={['function', 'result']}
            label='Display'
          />
        </DatGui>
        <div className={styles['row']}>
          <div className={styles['col']}>
            {
              <AceEditor
                mode='ejs'
                theme='monokai'
                onChange={value => this.handleTemplateChange(value)}
                name='UNIQUE_ID_OF_DIV'
                className={styles['ace-editor']}
                value={this.state.template}
                editorProps={{ $blockScrolling: true }}
              />
            }{' '}
          </div>
          <div
            className={styles['col'] + ' ' + styles['col-result']}
            style={{ background: this.state.err ? '#c0392b' : '#27ae60' }}
          >
            <pre className={styles['result']}>
              {this.state.err
                ? this.state.err
                : this.state.config.display === 'function'
                ? this.state.functionString
                : this.state.templateResult}
            </pre>
          </div>
        </div>
        <div className={styles['footer']}>
          <p style={{ margin: 0, padding: 0 }}>
            <span className={'octicon octicon-repo-forked'}></span> from
            <a href='https://github.com/IonicaBizau'> @IonicaBizau</a>'s EJS
            playground
          </p>
        </div>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <Layout
        title='Eta Playground'
        description='Test out the Eta template engine in your browser'
      >
        <Playground />
      </Layout>
    )
  }
}

export default App
