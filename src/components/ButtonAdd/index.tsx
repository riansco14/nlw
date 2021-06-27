import React from 'react'
import { RectButton } from 'react-native-gesture-handler'
import { styles } from './styles'
import { RectButtonProps } from 'react-native-gesture-handler'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { theme } from '../../global/theme'

interface ButtonIconProps extends RectButtonProps {
}

export function ButtonAdd({...rest}: ButtonIconProps) {
    return (
        <RectButton {...rest} style={styles.container}>
            <MaterialCommunityIcons
                name="plus"
                color={theme.colors.heading}
                size={24}
            />
        </RectButton>
    )
}
