import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { ModalProvider } from "./contexts/Modal";
import Home from "./containers/Home";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ModalProvider>
        <Home />
      </ModalProvider>
    </Provider>
  );
};

export default App;
