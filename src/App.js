import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './components/MainComponent';
import { Provider } from "react-redux";
import { configureStore } from "./redux/configureStore"

function App() {
  const store = configureStore()

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
