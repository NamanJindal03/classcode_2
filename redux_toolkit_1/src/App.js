import { Provider } from "react-redux";
import store from "./store/store";
import Counter from "./pages/Counter";
function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
