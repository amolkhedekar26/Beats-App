import { BrowserRouter } from 'react-router-dom'
import Driver from './components/Driver'
import store from './redux/store/store'
import { Provider } from 'react-redux'
// import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import toast, { Toaster } from 'react-hot-toast';
function App() {
  return (
    <Provider store={store}>
      <div className='app '>
        <BrowserRouter>
          <Driver />
        </BrowserRouter>
        {/*<ToastContainer*/}
        {/*  autoClose={5000}*/}
        {/*  hideProgressBar={false}*/}
        {/*  newestOnTop={false}*/}
        {/*  closeOnClick*/}
        {/*  draggable*/}
        {/*  pauseOnHover*/}
        {/*/>*/}
        <Toaster
          position="top-right"
          reverseOrder={true}/>
      </div>
    </Provider>
  )
}

export default App
