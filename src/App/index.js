import React from "react";
import { Provider } from "react-redux";
import createStore from "./Stores/";
import {PersistGate} from 'redux-persist/lib/integration/react';
import { ConnectedRouter } from 'connected-react-router'
import Root from "./root";
import {history} from './Stores/CreateStore'

export const { store, persistor  } = createStore();


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <Root />
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
