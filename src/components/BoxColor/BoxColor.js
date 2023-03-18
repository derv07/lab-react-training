import '../BoxColor/BoxColor.css'

function BoxColor({r, g, b}) {

  function valueToHex(c) {
    const hex = c.toString(16);
    return hex;
  }
  function rgbToHex(r, g, b) {
    return (`#${valueToHex(r)}` + valueToHex(g) + valueToHex(b))
  }

  return (
    <div className="d-flex flex-column col-6 ms-2 mb-2 border1 p-1 justify-content-center align-items-center" style={{backgroundColor: `rgb(${r}, ${g}, ${b})`, height: '100px'}}>
      <h3 className="text-light">rgb({r},{g},{b})</h3>
      <h3 className="text-light">{rgbToHex(r, g, b)}</h3>
    </div>
  )
}

export default BoxColor