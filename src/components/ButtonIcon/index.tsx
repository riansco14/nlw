import React from 'react'
import { RectButton } from 'react-native-gesture-handler'
import { Image, Text, View } from 'react-native'
import DiscordImg from '../../assets/discord.png'

import { styles } from './styles'
import { RectButtonProps } from 'react-native-gesture-handler'

interface ButtonIconProps extends RectButtonProps {
    title: string
}

export function ButtonIcon({title, ...rest}: ButtonIconProps) {
    return (
        <RectButton {...rest}>
            <View style={styles.container}>
                <View style={styles.iconWrapper}>
                    <Image source={DiscordImg} style={styles.icon} />
                </View>
                <Text style={styles.title}>{title}</Text>
            </View>
        </RectButton>
    )
}
