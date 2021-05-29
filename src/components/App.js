import './../css/App.css'
import CryptoData from './CryptoData';
import CryptoHeader from './CryptoHeader';
import 'animate.css/animate.css';
function App() {
  return (
    <div className="App">
      <CryptoHeader/>
      <CryptoData/>
    </div>
  );
}

export default App;
