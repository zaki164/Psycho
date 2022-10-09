import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Navbar } from './components';
import { Articles, Features, Gallery, HowItWorks, Pricing, Services, Skills, TeamMembers, Testimonials, TopVideos } from './Sections';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/Gallery' element={<Gallery />} />
      <Route path='/Features' element={<Features />} />
      <Route path='/Testimonials' element={<Testimonials />} />
      <Route path='/Articles' element={<Articles />} />
      <Route path='/Skills' element={<Skills />} />
      <Route path='/Pricing' element={<Pricing />} />
      <Route path='/HowItWorks' element={<HowItWorks />} />
      <Route path='/TeamMembers' element={<TeamMembers />} />
      <Route path='/Services' element={<Services />} />
      <Route path='/TopVideos' element={<TopVideos />} />
    </Routes>
  </BrowserRouter>
);

export default App;
