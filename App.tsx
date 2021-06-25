import React from 'react'

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font'
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani'

import { StatusBar, StyleSheet } from 'react-native'
import { SignIn } from './src/screens/SignIn'

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_500Medium, Inter_400Regular,
    Rajdhani_500Medium, Rajdhani_700Bold
  })

  if (!fontsLoaded) {
    <AppLoading />
  }

  return (
    <>
      <StatusBar barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <SignIn />
    </>
  )
}

const styles = StyleSheet.create({

})

