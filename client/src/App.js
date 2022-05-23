import './App.css';
import {Routes,Route} from "react-router-dom"
import NavigationBar from './Components/NavigationBar';
import ProductList from './Components/ProductList';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Routes>
        <Route exact path='/productlist' element={<ProductList/>}/>
        <Route exact path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
