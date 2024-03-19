import './App.css'
import Login from './components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './common/header/header'
import Register from './components/Register'
import Home from './components/MainPage/Home'

function App() {
  return (
    <>
     <BrowserRouter>
      <Header/>
      <Routes>
        {/* <Route path='/pages' element={<Pages/>}/>         shopItems={shopItems} */}
        <Route path='/' element={<Home />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Register" element={<Register/>} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App


{/* <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/Login" element={<Login/>} />
    </Routes>
  </BrowserRouter> */}

{/* <div>
  <a href="https://vitejs.dev" target="_blank">
    <img src={viteLogo} className="logo" alt="Vite logo" />
  </a>
  <a href="https://react.dev" target="_blank">
    <img src={reactLogo} className="logo react" alt="React logo" />
  </a>
</div>
<h1>Vite + React</h1>
<div className="card">
  <button onClick={() => setCount((count) => count + 1)}>
    count is {count}
  </button>
  <p>
    Edit <code>src/App.jsx</code> and save to test HMR
  </p>
</div>
<p className="read-the-docs">
  Click on the Vite and React logos to learn more
</p> */}