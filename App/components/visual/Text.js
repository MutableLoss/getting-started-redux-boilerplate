import React from 'react'

export default ({text, ...textProps}) => (
  <div
    {...textProps}>
    <h1>{text}</h1>
  </div>
)