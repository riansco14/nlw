import React from 'react'
import { View, Text, Image, Alert } from 'react-native'

import { styles } from './styles'
import IlustrationImg from '../../assets/illustration.png'

import { ButtonIcon } from '../../components/ButtonIcon'
import { Background } from '../../components/Background'
import {  useAuth } from '../../hooks/auth'
import { ActivityIndicator } from 'react-native'
import { theme } from '../../global/theme'

export function SignIn() {

    const { user, loading,  signIn } = useAuth()
    console.log(user);


    async function handleSignIn() {
        try {
            await signIn()
        } catch (error) {
            Alert.alert(error)
        }
    }

    return (
        <Background>
            <View style={styles.container}>
                <Image
                    source={IlustrationImg}
                    style={styles.image}
                    resizeMode="stretch"
                ></Image>

                <View style={styles.content}>
                    <Text style={styles.title}>
                        Conecte-se {'\n'}
                        e organize suas {'\n'}
                        jogatinas
                    </Text>
                    <Text style={styles.subtitle}>
                        Crie grupos para jogar seus games {'\n'}
                        favoritos com seus amigos
                    </Text>

                    {loading ? <ActivityIndicator color={theme.colors.primary} /> :<ButtonIcon
                        title="Entrar com Discord"
                        activeOpacity={0.7}
                        onPress={handleSignIn}
                    />}
                </View>
            </View >
        </Background>
    )
}
