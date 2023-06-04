import "./Figure.css"

import React from 'react'

const Figure = ({data}) => {
  return (
    <figure>
    <img src={data.url} alt={data.title} />
    <div class="window">
      <div class="title-bar">
        <button aria-label="Close" class="close" >Close</button>
        <h1 class="title">{data.title}</h1>
        <button aria-label="Resize" class="resize">Resize</button>
      </div>
      <div class="details-bar">
        <span>{data.date}</span>
        <span>{data.copyright}</span>
      </div>
      <div class="window-pane">{data.explanation}</div>
    </div>
  </figure>
  )
}

export default Figure