import React, { ReactNode } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import DiscordImg from '../../assets/discord.png'

import { styles } from './styles'
import { theme } from '../../global/theme'

interface Props {
    children: ReactNode
}

export function Background({ children }: Props) {
    const { secondary80, secondary100 } = theme.colors
    return (
        <LinearGradient
            style={styles.container}
            colors={[secondary80, secondary100]}
        >
            {children}
        </LinearGradient>
    )
}
