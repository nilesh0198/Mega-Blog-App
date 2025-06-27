import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div className="flex items-center" style={{width}}>
      <i className="fa-solid fa-blog text-3xl text-blue-600"></i>
    </div>
  )
}

export default Logo