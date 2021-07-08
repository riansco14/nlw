import React from 'react'

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font'
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani'
import { StatusBar, StyleSheet } from 'react-native'

import { Background } from './src/components/Background';
import { AuthContext, AuthProvider } from './src/hooks/auth'
import { Routes } from './src/routes/'

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular, Inter_500Medium,
    Rajdhani_500Medium, Rajdhani_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Background>
      <StatusBar barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <AuthProvider>
        <Routes />
      </AuthProvider>

    </Background>
  )
}

const styles = StyleSheet.create({

})

