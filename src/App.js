import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import 'font-awesome/css/font-awesome.min.css';

import Header from "./Component/Header/Header";
import Homepage from './Component/Homepage/Homepage';
import Benifits from './Component/Homepage/Benifits/Benifits';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Business from './Component/Homepage/Business/Business';
import Testimonials from './Component/Homepage/Testimonials/Testimonials';
import Footer from './Component/Footer/Footer';

const App = () => {
  const design = (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/blog' element={<Benifits />} />
          <Route path='/website' element={<Testimonials />} />
          <Route path='/team' element={<Business />} />
          <Route path='/contact' element={<Business />} />
          <Route path='/images' element={<Business />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
  return design;
}

export default App;