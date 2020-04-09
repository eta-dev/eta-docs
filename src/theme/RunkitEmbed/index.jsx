import React from 'react'

import '../../../static/scripts/react-runkit' // eslint-disable-line
import CodeSnippet from '@site/src/theme/CodeSnippet'

import Embed from 'react-runkit'

export default function RunKit(props) {
  if (typeof window !== 'undefined') {
    return <Embed source={props.source} />
  } else {
    return <CodeSnippet lang='javascript' snippet={props.source} />
  }
}
