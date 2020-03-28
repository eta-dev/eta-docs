/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import classnames from 'classnames'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

const features = [
  {
    title: <>Unbeatable Performance</>,
    imageUrl: 'img/undraw/outer_space.svg',
    description: (
      <>
        <a href='docs/about/performance'>Benchmarks</a> demonstrate just how
        fast Eta is. Think fast, then multiply by crazy speedy, and you have an
        idea of Eta's performance.
      </>
    )
  },
  {
    title: <>Simply JavaScript</>,
    imageUrl: 'img/undraw/coding.svg',
    description: (
      <>
        Eta's template syntax (inspired by EJS) means you write templates with
        just JavaScript -- you don't have to learn an entirely new template
        syntax.
      </>
    )
  },
  {
    title: <>Powerful and Lightweight</>,
    imageUrl: 'img/undraw/collecting.svg',
    description: (
      <>
        Eta was designed by the team who created Squirrelly as an alternative to
        EJS. Though it has almost-compatible syntax, it's more configurable and
        has a minzipped bundle cost of only ~2KB!
      </>
    )
  }
]

function Home() {
  // const context = useDocusaurusContext()
  // const { siteConfig = {} } = context
  return (
    <Layout
      permalink='/'
      title='EtaJS'
      description='Blazing-fast, lightweight, powerful and modern JS template engine'
    >
      <div className={styles['index-hero']}>
        <div className={styles['index-hero-inner']}>
          {/* <img
            alt='Greek Letter Eta'
            className={styles['index-hero-logo']}
            src={useBaseUrl('img/logo-white.svg')}
            style={{ width: '35%' }}
          /> */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            style={{ isolation: 'isolate', width: '35%' }}
            viewBox='0 0 128 128'
            width='300pt'
            height='300pt'
            className={styles['index-hero-logo']}
          >
            <defs>
              <clipPath id='_clipPath_39da3O2sW6DAc6nsluCMvct1OSrF59oN'>
                <rect width='128' height='128' />
              </clipPath>
            </defs>
            <g clipPath='url(#_clipPath_39da3O2sW6DAc6nsluCMvct1OSrF59oN)'>
              <text
                transform='matrix(1,0,0,1,29,87.773)'
                style={{
                  fontFamily: 'Noto Sans',
                  fontWeight: 400,
                  fontSize: '110px',
                  fontStyle: 'normal',
                  fill: 'var(--ifm-font-base-color)',
                  stroke: 'none'
                }}
              >
                η
              </text>
            </g>
          </svg>
          <h1 className={styles['index-hero-project-tagline']}>
            Eta is a faster, more lightweight, and more configurable embedded JS
            template engine
            {/* <br />{' '}
            <span className={styles['index-hero-project-keywords']}>
              - Powerful
            </span>{' '}
            <br />
            <span className={styles['index-hero-project-keywords']}>
              - Lightweight
            </span>{' '}
            <br />
            <span className={styles['index-hero-project-keywords']}>
              - Blazing-Fast
            </span>{' '}
            <br /> */}
          </h1>
          <div className={styles['index-ctas']}>
            <Link
              className={styles['index-ctas-get-started-button']}
              to={useBaseUrl('docs/get-started/overview')}
            >
              Get Started
            </Link>
            <span className={styles['index-ctas-github-button']}>
              <iframe
                src='https://ghbtns.com/github-btn.html?user=eta-dev&amp;repo=eta&amp;type=star&amp;count=true&amp;size=large'
                frameBorder={0}
                scrolling={0}
                width={160}
                height={30}
                title='GitHub Stars'
              />
            </span>
          </div>
        </div>
      </div>

      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className='container'>
              <div className='row'>
                {features.map(({ imageUrl, title, description }, idx) => (
                  <div
                    key={idx}
                    className={classnames('col col--4', styles.feature)}
                  >
                    {imageUrl && (
                      <div className='text--center'>
                        <img
                          className={styles.featureImage}
                          src={useBaseUrl(imageUrl)}
                          alt={title}
                        />
                      </div>
                    )}
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  )
}

export default Home
