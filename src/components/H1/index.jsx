import React from 'react'
import PropTypes from 'prop-types'

function H1(props) {
  return (
    <h1 className="text-center text-green-300 font-bold text-2xl md:text-4xl py-6">{props.text}</h1>
  )
}

H1.propTypes = {
    text: PropTypes.string
}

export default H1