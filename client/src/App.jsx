import './App.css'
import Budget from './components/Budget'
import Slider from './components/Slider'
import ViewExpense from './components/ViewExpense'
import { Route, Routes } from 'react-router-dom'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Slider />} />
        <Route path='/view-expense' element={<ViewExpense />} />
        <Route path='/budget' element={<Budget />} />
      </Routes>
     
    </>
  )
}

export default App
