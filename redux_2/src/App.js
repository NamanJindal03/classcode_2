import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import store from './store/store';
function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route  path='/checkout' element={<Checkout/>}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
