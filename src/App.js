import './App.scss';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Trips from './components/Trips/Trips';
// eslint-disable-next-line
import "swiper/css/bundle";
import Results from './components/Results/Results';
import Thankyou from './pages/Thankyou';
import Championman2022 from './components/Trips/Describetrips/Championman2022/Championman2022';
import Maraton2022 from './components/Trips/Describetrips/Maraton2022/Maraton2022';
import Poznan2022 from './components/Trips/Describetrips/Poznan2022/Poznan2022';
import Babicka2022 from './components/Trips/Describetrips/Babicka2022/Babicka2022';
import Gdynia2022 from './components/Trips/Describetrips/Gdynia2022/Gdynia2022';
import Bydgoszcz2022 from './components/Trips/Describetrips/Bydgoszcz2022/Bydgoszcz2022';
import Olsztyn2022 from './components/Trips/Describetrips/Olsztyn2022/Olsztyn2022';
import Grandprixpolski2023 from './components/Trips/Describetrips/Grandprixpolski2023/Grandprixpolski2023';
import Indoortriathlon2023 from './components/Trips/Describetrips/Indoortriathlon2023/Indoortriathlon2023';
import Mprumia2023 from './components/Trips/Describetrips/Mprumia2023/Mprumia2023';
import Mpczempin2023 from './components/Trips/Describetrips/Mpczempin2023/Mpczempin2023';
import Gallery from './components/Gallery/Gallery';
import Records from './components/Records/Records';
import Ursynow2023 from './components/Trips/Describetrips/Ursynow2023/Ursynow2023';
import Mpsusz2023 from './components/Trips/Describetrips/Mpsusz2023/Mpsusz2023';
import Bydgoszcz2023 from './components/Trips/Describetrips/Bydgoszcz2023/Bydgoszcz2023';
import Ironman2023 from './components/Trips/Describetrips/Ironman2023/Ironman2023';
import Poznan2023 from './components/Trips/Describetrips/Poznan2023/Poznan2023';
import Niepodleglosci2023 from './components/Trips/Describetrips/Niepodleglosci2023/Niepodleglosci2023';
import Bielany2024 from './components/Trips/Describetrips/Bielany2024/Bielany2024';
import Grandprixpolski2024 from './components/Trips/Describetrips/Grandprixpolski2024/Grandprixpolski2024';



function App() {
  return (
    <div className="App">
      <Router>
          <Nav />   
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/records' element={<Records />} />
          <Route path='/results' element={<Results />} />
          <Route path='/trips' element={<Trips />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/thankyou' element={<Thankyou />} />
          <Route path='/maraton2022' element={<Maraton2022 />} />
          <Route path='/championman2022' element={<Championman2022 />} />
          <Route path='/poznan2022' element={<Poznan2022 />} />
          <Route path='/babicka2022' element={<Babicka2022 />} />
          <Route path='/gdynia2022' element={<Gdynia2022 />} />
          <Route path='/bydgoszcz2022' element={<Bydgoszcz2022 />} />
          <Route path='/olsztyn2022' element={<Olsztyn2022 />} />
          <Route path='/indoor2023' element={<Indoortriathlon2023 />} />
          <Route path='/grandprixpolski2023' element={<Grandprixpolski2023 />} />
          <Route path='/mprumia2023' element={<Mprumia2023 />} />
          <Route path='/mpczempin2023' element={<Mpczempin2023 />} />
          <Route path='/ursynow2023' element={<Ursynow2023 />} />
          <Route path='/susz2023' element={<Mpsusz2023 />} />
          <Route path='/bydgoszcz2023' element={<Bydgoszcz2023 />} /> 
          <Route path='/ironman2023' element={<Ironman2023 />} />
          <Route path='/poznan2023' element={<Poznan2023 />} />
          <Route path='/biegniepodleglosci2023' element={<Niepodleglosci2023 />} />
          <Route path='/bielany2024' element={<Bielany2024 />} />
          <Route path='/grandprixpolski2024' element={<Grandprixpolski2024 />} />
          <Route path='/thankyou' element={<Thankyou />} />
         </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
