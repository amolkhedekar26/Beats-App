import { BrowserRouter } from 'react-router-dom'
import Driver from './components/Driver'
import store from './redux/store/store'
import { Provider } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <Provider store={store}>
      <div className='app '>
        <BrowserRouter>
          <Driver />
        </BrowserRouter>
        <Toaster
          position='top-right'
          reverseOrder={false} />
      </div>
    </Provider>
  )
}

export default App
