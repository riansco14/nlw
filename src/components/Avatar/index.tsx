import React from 'react'

import { LinearGradient } from 'expo-linear-gradient'
import {View, Image} from 'react-native'
import { styles } from '../Avatar/styles'
import { theme } from '../../global/theme'


interface AvatarProps {
    urlImage: string
}

export function Avatar({urlImage}:AvatarProps) {
    const {secondary50, secondary70} = theme.colors

    return (
        <LinearGradient
            style={styles.container}
            colors={[secondary50, secondary70]}
        >
            <Image
                source={{ uri: urlImage }}
                style={styles.avatar}
            />
        </LinearGradient>
    )
}
