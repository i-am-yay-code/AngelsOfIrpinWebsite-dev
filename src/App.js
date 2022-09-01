import './App.scss';
import Header from './components/HeaderComponent';
import FirstScreen from './components/FirstScreen';
import Statistics from './components/StatisticsComponent';
import VolonteerWanted from './components/VolonteerComponent'
import Donate from './components/DonateComponent';
import Partners from './components/PartnersComponent';
import Footer from './components/FooterComponent';

function App() {
  return (
    <div className="App">
      <Header isOpen={false} />
      <FirstScreen />
      <Statistics />
      <Donate />
      <Partners />
      <VolonteerWanted />
      <Footer />
    </div>
  );
}

export default App;
