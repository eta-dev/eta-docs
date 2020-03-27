import React from 'react'
import Layout from '@theme/Layout'
import styles from './styles.module.css'
import CodeBlock from '@theme/CodeBlock'

import * as Eta from 'eta'

Eta.templates.define(
  'mypartial',
  Eta.compile('Partial content: the value of `num` is <%= it.num %>')
)

var initialTemplate = `Hi
<% console.log("Hope you like Eta!"); %>
<%= it.htmlstuff %>

<% for (var key in it.obj) { %>
Value: <%= it.obj[key] %>, Key: <%= key %>

<% if (key === 'thirdchild') { %>
  <% for (var i = 0, arr = it.obj[key]; i < arr.length; i++) { %>
      Salutations! Index: <%= i %>, parent key: <%= key %>
      
  <% } %>
<% } %>
<% } %>

This is a partial: <%= E.include("mypartial", {num: 3}) %>
`

var initialData = `"htmlstuff": "<script>alert('hey')</script><p>alert('hey')</p><p>alert('hey')</p><p>alert('hey')</p>",
"arr": ["Hey", "<p>Malicious XSS</p>", "Hey", 3, 12],
"obj": {
  "firstchild": "HI",
  "secondchild": "HEY",
  "thirdchild": [3, 6, 3, 2, 5, 4]
}`

function TemplateEditor(props) {
  return (
    <div className={styles.templategroup}>
      <h4>Template</h4>
      <textarea
        autoComplete='off'
        onChange={props.onChange}
        defaultValue={props.content}
      />
    </div>
  )
}

function FunctionDisplay(props) {
  return (
    <div className={styles.functiongroup}>
      <h4>Compile</h4>
      {/* <div className={styles.function}>{props.result}</div> */}
      <CodeBlock className='javascript'>{props.result}</CodeBlock>
    </div>
  )
}

function DataEditor(props) {
  return (
    <div className={styles.datagroup}>
      <h4>Data</h4>
      <textarea
        autoComplete='off'
        onChange={props.onChange}
        defaultValue={initialData}
      />
    </div>
  )
}

function ResultDisplay(props) {
  return (
    <div className={styles.resultgroup}>
      <h4>Result</h4>
      <div className={styles.result}>{props.result}</div>
    </div>
  )
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log('Eta had an error: ', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>
    }

    return this.props.children
  }
}

class Playground extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      template: initialTemplate,
      data: JSON.parse('{' + initialData + '}'),
      functionString: Eta.compile(initialTemplate).toString(),
      templateResult: Eta.render(
        initialTemplate,
        JSON.parse('{' + initialData + '}')
      )
    }
    this.handleDataChange = this.handleDataChange.bind(this)
    this.handleTemplateChange = this.handleTemplateChange.bind(this)
  }

  handleDataChange(event) {
    if (
      event.target.value &&
      JSON.parse('{' + (event.target.value || '') + '}')
    ) {
      var data = JSON.parse('{' + (event.target.value || '') + '}')
      this.setState(
        {
          data: data || {}
        },
        this.updateEtaResults
      )
    }
  }

  handleTemplateChange(event) {
    this.setState(
      {
        template: event.target.value || ''
      },
      this.updateEtaResults
    )
  }

  updateEtaResults() {
    var functionString
    var templateResult

    try {
      functionString = Eta.compile(this.state.template).toString()
      this.setState({
        functionString: functionString
      })
    } catch (ex) {}

    try {
      templateResult = Eta.render(this.state.template, this.state.data)
      this.setState({
        templateResult: templateResult
      })
    } catch (ex) {}
  }

  render() {
    return (
      <div className={styles.playground}>
        <span>
          {'  '}Based on the excellent
          <a href='http://olado.github.io/doT/index.html'> DoT.js</a> website
        </span>
        <div className={styles.samples}>
          {/* <ul className={styles['sampletabs']}>
              <li id="xinterpolation" className="">
                interpolation
              </li>
              <li id="xevaluation" className="">
                evaluation
              </li>
              <li id="xpartials" className="">
                partials
              </li>
              <li id="xconditionals" className="">
                conditionals
              </li>
              <li id="xarrays" className="active">
                arrays
              </li>
              <li id="xencode">encode</li>
            </ul> */}
          {/* <!--Keeping this just in case I implement a similar tabs feature--> */}
          {/* <div class="stripgroup">
              <input id="strip" type="checkbox" checked="checked" />
              <label for="strip">Strip whitespaces</label>
            </div> */}
          <div style={{ clear: 'both', height: '10px' }} />
          <TemplateEditor
            onChange={this.handleTemplateChange}
            content={this.state.template}
          />
          <FunctionDisplay result={this.state.functionString} />
          <div style={{ clear: 'both' }} />
          <DataEditor onChange={this.handleDataChange} />
          <ResultDisplay result={this.state.templateResult || ''} />
        </div>
      </div>
    )
  }
}

class ErrorHandlingPlayground extends React.Component {
  render() {
    return (
      <Layout
        title='Eta Playground'
        description='Test out the Eta template engine in your browser'
      >
        <ErrorBoundary>
          <Playground />
        </ErrorBoundary>
      </Layout>
    )
  }
}

export default ErrorHandlingPlayground
