import React, { ReactNode } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { View } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { theme } from '../../global/theme'
import Feather from '@expo/vector-icons/Feather'
import { Text } from 'react-native'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'

interface Props {
    title: string
    action?: ReactNode
}

export function Header({ title, action }: Props) {
    const navigation = useNavigation()

    const { secondary100, secondary40, heading } = theme.colors

    function handleGoBack() {
        navigation.goBack()    
    }

    return (
        <LinearGradient
            colors={[secondary100, secondary40]}
            style={styles.container}
        >
            <BorderlessButton onPress={handleGoBack}>
                <Feather size={24} color={heading} name="arrow-left" />
            </BorderlessButton>

            <Text style={styles.title}>{title}</Text>

            {action && <View>{action}</View>}
        </LinearGradient>
    )
}
