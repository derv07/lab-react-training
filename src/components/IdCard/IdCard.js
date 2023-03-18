import '../IdCard/IdCard.css'

function IdCard({lastName, firstName, gender, height, birth, picture}) {
  return (
    <div className="d-flex flex-row border1 m-2 align-items-center col-6">
      <div className="ps-1 pe-1">
        <img className="border" src={picture} alt="..."/>
      </div>
        <div>
          <p>
            <strong>First name:</strong> {firstName}<br></br>
            <strong>Last name:</strong> {lastName}<br></br>
            <strong>Gender:</strong> {gender}<br></br>
            <strong>Height:</strong> {height / 100}m<br></br>
            <strong>Birth:</strong> {birth}
          </p>
        </div>
    </div>
  )
}

export default IdCard