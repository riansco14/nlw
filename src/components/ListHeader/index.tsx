import React from 'react'

import { styles } from './styles'
import { theme } from '../../global/theme'
import { View } from 'react-native'
import { Text } from 'react-native'

interface ListHeaderProps {
    title: string
    subtitle: string
}

export function ListHeader({ title, subtitle }: ListHeaderProps) {
    const { secondary80, secondary100 } = theme.colors
    return (
        <View
            style={styles.container}
        >
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    )
}
