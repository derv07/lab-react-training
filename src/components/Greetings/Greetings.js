import '../Greetings/Greetings.css'

function Greetings({lang, children}) {
  
  function greetingsSwitch(lang) {
    switch(lang) {
      case 'en':
        return 'Greetings'
      case 'fr':
        return 'Bonjour'
      case 'es':
        return 'Saludos'
      case 'de':
        return 'Hallo'
      default:
        return ''
    }
  }
  
  
  return (
    <div className="border1 ms-2 mb-2 p-1 col-6">
      <h3>{greetingsSwitch(lang)} {children}</h3>
    </div>
  )
}

export default Greetings