
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Restaurant from './Restaurant';
import Restview from './Restview';
import Restaurantview from './Restaurantview';


function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
       <Route path='/' element={<Restaurant />} />
       <Route path='/viewRest/:id' element={<Restaurantview />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
