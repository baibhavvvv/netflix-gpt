import React from 'react'

const Videotitle = ({title,overview}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{overview}</p>
      <div>
        <button>Play</button>
        <button>More Info</button>
      </div>
    </div>
  )
}

export default Videotitle
