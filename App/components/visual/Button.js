import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

export default ({text, ...buttonProps}) => (
  <Fragment>
    <button
      {...buttonProps}>
      {text}
    </button>
  </Fragment>
)