import React from 'react';
import { StatusBar } from 'react-native';

import 'react-native-gesture-handler';
import './config/reactotronConfig';

import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#e71"/>
      <Routes />
    </>
    );
}
