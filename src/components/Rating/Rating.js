import React from 'react'

function Rating({children}) {

  const starArr = ['☆', '☆', '☆', '☆', '☆']

  function ratingInColor(num) {
    starArr.splice(0, Math.round(num))
    for (let i = 0; i < Math.round(num); i++) {
      starArr.unshift('★')
    }
    return starArr;
  }

  return (
    <div className="fs-1">{ratingInColor(children)}</div>
  )
}

export default Rating