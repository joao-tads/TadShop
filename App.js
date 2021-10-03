import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Routes from './src/router';
import { useFonts } from 'expo-font';

export default function App() {

  const [loaded] = useFonts({
    Anton: require('./assets/fonts/Anton-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" backgroundColor="#000" translucent={true} />
      <Routes />
    </>
  );
}