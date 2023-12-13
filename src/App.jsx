import { BrowserRouter } from 'react-router-dom'
import Driver from './components/Driver'
import store from './redux/store/store'
import { Provider } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <div className="app ">
        <BrowserRouter>
        
          <Driver />
        </BrowserRouter>
        <ToastContainer autoClose={false} />
      </div>
    </Provider>
  )
}

export default App
