import React from 'react'
import PropTypes from 'prop-types'

function Button({text, callback, disabled}) {

  const disabledStyle = {
    cursor: 'not-allowed',
    opacity: '0.7',
    backgroundColor: 'rgb(134, 239, 172)',
    color: 'white'
  }

  return (
    <button className="
        w-full
        sm:px-6 
        py-2.5 
        bg-white 
        shadow-sm 
        text-green-300 
        font-bold 
        border-green-300 
        border-4 
        rounded
        hover:bg-green-300
        hover:text-white
        transition
        duration-150"
        style={disabled ? disabledStyle : {}}
        disabled={disabled}
        onClick={callback}>{text}</button>
  )
}

Button.propTypes = {
    text: PropTypes.string,
    callback: PropTypes.func,
    disabled: PropTypes.bool
}

export default Button