import '../Random/Random.css'

function Random({min, max}) {

  function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  return (
    <div className='border1 mb-2 ms-2 p-1 col-6'>
      <h3>Random value between {min} and {max} ={'>'} {randomInt(min, max)}</h3>
    </div>
  )
}

export default Random
