import { Route, Routes } from 'react-router-dom'
import ChatenVivo from './SocketIo/Chat'
import './App.css'

function App() {
 
  return (
    <div>
      <h1>Spoty Fans</h1>
      <Routes>
        <Route path='/chat' element={<ChatenVivo/>}/>
      </Routes>
     </div>
  )
}

export default App
