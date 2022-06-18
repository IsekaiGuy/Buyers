import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import AppRoute from './src/navigations/navigator';

export default function App() {
  return (
    <Provider store={store}>
      <AppRoute />
    </Provider>
  );
}
