import React from 'react'
import visaLogo from '../../assets/images/visa.png'
import mcLogo from '../../assets/images/MasterCard_early_1990s_logo.png'

function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {

  function cryptNumber(num) {
    const numArr = num.split("")
    return numArr.slice(-4)
  }

  function cardLogo(type) {
    if (type.includes('Visa')) {
      return visaLogo;
    } else if (type.includes('Master')) {
      return mcLogo;
    }
  }

  return (
    <div>
      <div className="card" style={{backgroundColor: `${bgColor}`, color: `${color}`, width: '350px', height: '190px'}}>
        <div className="card-body">
          <div className="text-end">
            <img className="" src={cardLogo(type)} alt="..." style={{width: '50px'}}/>
            <div className="d-flex flex-row align-items-center justify-content-center">
              <p className="fs-1 me-2">····</p>
              <p className="fs-1 me-2">····</p>
              <p className="fs-1 me-2">····</p>
              <p className="fs-3"> {cryptNumber(number)}</p>
            </div>
          </div>
          <div className="d-flex flex-row">
            <p className="">Expires {expirationMonth}/{expirationYear}</p>
            <p className="ms-5">{bank}</p>
          </div>
          <p className="">{owner}</p>
        </div>
      </div>
    </div>
  )
}

export default CreditCard