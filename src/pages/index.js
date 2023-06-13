import React from "react"
import classnames from "classnames"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import useBaseUrl from "@docusaurus/useBaseUrl"
import styles from "./index.module.css"
import CodeBlock from "@theme/CodeBlock"
import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"

const snippets = [
  {
    label: "Example 1",
    config: `Users:

<ul>
<% it.users.forEach(function(user){ %>
  <li><%= user %></li>
<% }) %>
</ul>`
  },
  {
    label: "Example 2",
    config: `<%= await getSomeValue() %>
    
<% /* Eta supports multiline comments,
which is really useful */ %>

<%= "<%" %>
`
  },
  {
    label: "Example 3",
    config: `<% /* Embedded JS templates mean that you can
write any valid JS expression inside interpolate tags: */ %>

<%= 2 + 4 %>`
  },
  {
    label: "Partials",
    config: `<%~ include("mypartial") %>

<%~ include('./navbar', { pages: [
  'home',
  'about',
  'users'
] }) %>`
  },
  {
    label: "Layouts",
    config: `<% layout("layouts/basic") %>

<p>This will be rendered into a layout</p>`
  }
]

function Snippet({ label, config }) {
  return <CodeBlock language="ejs">{config}</CodeBlock>
}

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Lighweight, powerful, pluggable embedded JS template engine"
      keywords={[
        "embedded js",
        "template engine",
        "fast template engine",
        "ejs",
        "embedded template engine"
      ]}
    >
      <header className={classnames("hero", styles.heroBanner)}>
        <div className="container">
          <div className="row">
            <div className={classnames("col col--5 col--offset-1")}>
              <h1 className="hero__title">{siteConfig.title}</h1>
              <p className="hero__subtitle">
                Lightweight, powerful, pluggable embedded JS template engine.
              </p>
              <p className="hero__subtitle">
                Written in TypeScript – for use in Node, Deno, or the browser
              </p>
              <div className={styles.buttons + " " + styles.buttonDiv}>
                <Link
                  className={classnames(
                    "button button--outline button--secondary button--lg",
                    styles.getStarted
                  )}
                  to={useBaseUrl("docs")}
                >
                  Get Started
                </Link>
              </div>
              <div className={styles.buttons + " " + styles.buttonDiv}>
                <Link
                  className={classnames(
                    "button button--outline button--secondary button--lg",
                    styles.getStarted
                  )}
                  to={useBaseUrl("docs/intro/template-syntax")}
                >
                  Eta Syntax Guide
                </Link>
              </div>
            </div>
            <div className={classnames("col col--5")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ isolation: "isolate", width: "100%" }}
                viewBox="0 0 128 128"
                width="128pt"
                height="128pt"
                className={styles["heroImg"]}
              >
                <defs>
                  <clipPath id="_clipPath_39da3O2sW6DAc6nsluCMvct1OSrF59oN">
                    <rect width="128" height="128" />
                  </clipPath>
                </defs>
                <g clipPath="url(#_clipPath_39da3O2sW6DAc6nsluCMvct1OSrF59oN)">
                  <text
                    transform="matrix(1,0,0,1,29,87.773)"
                    style={{
                      fontFamily: "Noto Sans",
                      fontWeight: 400,
                      fontSize: "110px",
                      fontStyle: "normal",
                      fill: "var(--ifm-font-base-color)",
                      stroke: "none"
                    }}
                  >
                    η
                  </text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="row">
            <div className={classnames(`${styles.pitch} col col--6`)}>
              <h2>
                A faster, more lightweight, and more configurable EJS
                alternative
              </h2>
              <p>Eta vs. EJS:</p>
              <ul>
                <li>
                  Eta{" "}
                  <b>
                    <a href="https://deno.land/x/eta">supports Deno</a>
                  </b>
                  , out-of-the-box
                </li>
                <li>
                  Eta supports <b>layouts</b> out of the box (
                  <a href="/docs/learn/layouts">learn more</a>)
                </li>
                <li>
                  Eta allows <b>left whitespace control</b> (with <code>-</code>
                  ), something that doesn't work in EJS because EJS uses{" "}
                  <code>-</code> on the left side to indicate that the value
                  shouldn't be escaped. Instead, Eta uses <code>~</code> to
                  output a raw value
                </li>
                <li>
                  Eta gives you <b>more flexibility with delimeters</b> -- you
                  could set them to <code>{"{{"}</code> and <code>{"}}"}</code>,
                  for example, while with EJS this isn't possible
                </li>
                <li>
                  Eta adds <b>plugin support</b>
                </li>
                <li>
                  Comments in Eta use <code>/* ... */</code> which allows
                  multiline commenting and is more consistent
                </li>
                <li>
                  Eta doesn't break with delimiters inside strings and comments.{" "}
                  <i>
                    Example: <code>{'<%= "%>" %>'}</code> works in Eta, while it
                    breaks in EJS
                  </i>
                </li>
                <li>
                  Eta exposes <b>Typescript types</b> and distributes a UMD
                  build
                </li>
                <li>
                  Eta allows custom tag-type prefixes.{" "}
                  <i>
                    Example: you could change <code>{"<%="}</code> to{" "}
                    <code>{"<%*"}</code>
                  </i>
                </li>
                <li>
                  Eta throws more informative errors.{" "}
                  <i>
                    If you accidentally leave a tag, string, or multiline
                    comment unclosed, Eta will tell you where the problem is
                  </i>
                </li>
              </ul>
            </div>
            <div className={classnames("col col--6")}>
              {snippets && snippets.length && (
                <section className={styles.configSnippets}>
                  <Tabs
                    defaultValue={snippets[0].label}
                    values={snippets.map((props, idx) => {
                      return { label: props.label, value: props.label }
                    })}
                  >
                    {snippets.map((props, idx) => (
                      <TabItem key={idx} value={props.label}>
                        <Snippet {...props} />
                      </TabItem>
                    ))}
                  </Tabs>
                </section>
              )}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Home
