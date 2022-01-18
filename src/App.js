import logo from './logo.svg';
import './App.css';
import AngryButton from './components/AngryButton';
import CounterButton from './components/CounterButton';
import LightSwitchButton from './components/LightSwitchButton';
import TextRepeaterButton from './components/TextRepeaterButton';

function App() {
  const [light, setLight] = useState('off');
  const dark = (light === 'off') ? 'dark' : '';
  return (
    <div className={`App ${dark}`}>
      <h1>Fancy Buttons!</h1>
      <section>
        <AngryButton />
        <CounterButton />
        <LightSwitchButton light={light} setLight={setLight} />
        <TextRepeaterButton />
      </section>
    </div>
  );
}

export default App;
