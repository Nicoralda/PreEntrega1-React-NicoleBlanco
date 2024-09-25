import NavBar from './components/NavBar/NavBar'
import ItemListCpontainer from './components/ItemListContainer/ItemListContainer'
import './App.css'

function App() {

  return (
      <div className='container'>
        <NavBar />
        <ItemListCpontainer greeting={'¡Hola! Gracias por estar aquí'} />
      </div>
  )
}

export default App
