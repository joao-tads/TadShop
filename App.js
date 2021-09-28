import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Routes from './src/router';
import { useFonts } from 'expo-font';

export default function App() {

  let [fontsLoaded] = useFonts({
    'Anton': require('./assets/fonts/Anton-Regular.ttf'),
  });

  return (
    <>
      <StatusBar style="light" backgroundColor="#000" translucent={true} />
      <Routes />
    </>
  );
}