import React from 'react'

function Card(props) {
  return (
    <div className="container">
        <div className="card">
      <div className="card__body">
        <img src={props.img} class="card__image" alt='' />
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
      </div>
      <button className="card__btn">Read More</button>
    </div>
    </div>
  )
}

export default Card
