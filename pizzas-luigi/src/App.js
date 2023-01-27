import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login } from './login/Login';
import { Menu } from './menu/Menu';
import { NotFoundPage } from './notFound/NotFoundPage';
import { Provider } from './context/Context';

function App() {
  return (
    <div className="App">
      {/* proveedor de contexto */}
      <Provider>
        {/* router-dom-react */}
        <Routes>
          <Route index element={ <Login /> } />
          <Route path="/" element={ <Login /> } />
          <Route path="pizzasluigi" element={ <Login /> } />
          <Route path="/menu" element={ <Menu /> } />
          <Route path="*" element={ <NotFoundPage/> } />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
