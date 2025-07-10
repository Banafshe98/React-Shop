import './App.css'
import Header from './header'
import Navmenu from './Navmenu'
import Productcategory from './Productcategory'
import Productscarousel from './Productscarousel'

function App() {

  return (
    <div className='flex flex-col'>
        <Header/>
        <Navmenu/>
        <Productcategory/>
    </div>
  )
}

export default App
