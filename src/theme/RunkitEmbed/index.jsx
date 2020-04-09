import React from 'react'

import '../../../static/scripts/react-runkit' // eslint-disable-line
import Embed from 'react-runkit'

export default function RunKit(props) {
  return <Embed source={props.source} />
}
