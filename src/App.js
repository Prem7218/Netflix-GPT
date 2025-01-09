import { Provider } from 'react-redux';
import './App.css';
import Body from './Component/Body';
import appStore from './utils/Stores/appStore';


function App() {

  return (
    <Provider store={appStore}>
      <Body/>
    </Provider>
  );
}

export default App;
