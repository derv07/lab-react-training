import React from 'react'
import Rating from '../Rating/Rating'
import '../DriverCard/DriverCard.css'

function DriverCard({name, rating, img, car}) {
  return (
    <div class="rounded d-flex flex-row p-3 col-6 ms-2 justify-content-center mb-2 bg">
      <div className="d-flex text-light">
        <img src={img} alt="." style={{borderRadius: '50%', width: '120px', height: 'auto'}}/>
        <div class="card-body">
          <h4 class="card-title">{name}</h4>
          <Rating>{rating}</Rating>
          <p class="card-text">{car.model} - {car.licensePlate}</p>
        </div>
      </div>
    </div>

  )
}

export default DriverCard