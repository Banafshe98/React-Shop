import './App.css'
import Categoryitem from './Categoryitem'
import Header from './header'
import Navmenu from './Navmenu'
import Productcategory from './Productcategory'

function App() {

  return (
    <div className='flex flex-col'>
        <Header/>
        <Navmenu/>
        <Productcategory/>
        <Categoryitem/>
    </div>
  )
}

export default App
