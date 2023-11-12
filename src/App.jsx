
import { CardComponent } from './component/CardComponent'
import { NavbarComponent } from './component/NavbarComponent'

import { CarouselComponent } from './component/CarouselComponent'
import './App.css'
function App() {

  return (
    <>
    <NavbarComponent/>
   
    <CarouselComponent classname="mx-auto" />
    <CardComponent/>
   
      {/* <h1 className="text-3xl font-bold underline">
      
      Hello world!
    </h1> */}
    </>
  )
}

export default App
