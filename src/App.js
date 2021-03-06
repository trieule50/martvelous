import Navigation from './components/Navigation';
import Home from './components/Home';
import FAQ from './components/FAQ';
import PaintBox from './components/PaintBox';
import Footer from './components/Footer';

import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <main>
        <Routes>
          <Route path='/faq' element={<FAQ/>}/>
          <Route path='/paintbox' element={<PaintBox/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
