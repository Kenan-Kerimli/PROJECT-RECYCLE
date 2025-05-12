import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Pages/User/Home';
import RecycleAI from './Pages/User/RecycleAI'
import Contact from './Pages/User/Contact';
import UserRoot from './Pages/User/UserRoot';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<UserRoot />}>
          <Route index element={<Home />} />
          <Route path='recycleai' element={<RecycleAI />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
