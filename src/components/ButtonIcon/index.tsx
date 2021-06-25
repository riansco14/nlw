import React from 'react'
import { Image, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import DiscordImg from '../../assets/discord.png'

import { styles } from './styles'

interface ButtonIconProps extends TouchableOpacityProps {
    title: string
}

export function ButtonIcon({title, ...rest}: ButtonIconProps) {
    return (
        <TouchableOpacity {...rest}>
            <View style={styles.container}>
                <View style={styles.iconWrapper}>
                    <Image source={DiscordImg} style={styles.icon} />
                </View>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}
