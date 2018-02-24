import React from 'react'

export default ({progress}) => (
  <div className="progress" role="progressbar">
    <div className="progress-meter" style={{ width: progress + '%' }} aria-valuemin="0" aria-valuetext={`${progress} percent done receiving users`} aria-valuemax="100"></div>
  </div>
)