
import { Provider } from 'react-redux';
import './App.css';
import CakeContainer from './components/CakeContainer';
import store from './redux/store'
import IcecreamContainer from './components/IcecreamContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <IcecreamContainer/>
      </div>
    </Provider>
  );
}

export default App;
