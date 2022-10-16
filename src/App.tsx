import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import { AppContextProvider } from './services/context'
import { GlobalStyle } from './styles/global'

function App() {

  return (
    <BrowserRouter>
      <AppContextProvider>
        <GlobalStyle/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </AppContextProvider>
    </BrowserRouter>
  )
}

export default App
