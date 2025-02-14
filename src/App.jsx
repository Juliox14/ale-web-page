import SeccionFotos from './components/SeccionFotos'
import Inicio from './components/Inicio'
import Header from './components/Header'
import BtnWhatsapp from './components/BotonWhatsapp'
import SeccionRegalos from './components/SeccionRegalos'
import Carta from './components/Carta'
import Footer from './components/Footer'
import Dibujo from './components/Dibujo'

function App() {
  return (
    <>
      <div className='flex flex-col items-center justify-center min-h-screen'>
        <Header />
        <Inicio />
        <SeccionFotos />
        <SeccionRegalos />
        <div className='flex flex-col items-center justify-center bg-white' id='carta'>
          <Carta />
        </div>
        <BtnWhatsapp />
        <Dibujo />
        <Footer />
      </div>
    </>
  )
}

export default App;