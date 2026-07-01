import {Routes,Route} from 'react-router-dom'
import Register from './component/Register'
import Login from './component/Login'
import Dashboard from './component/Dashboard'

const App = () => {
  return (
    <Routes>
     <Route path='/' element={<Login/>} />
    <Route path='/Register' element={<Register/>} />
    <Route path='/Dashboard' element={<Dashboard/>} />

    </Routes>
    
  
  )
}

export default App