import React from 'react'
import { View } from 'react-native'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { GuildIcon } from '../GuildIcon'
import Feather from '@expo/vector-icons/Feather'
import { Text } from 'react-native'
import { styles } from './styles'
import { theme } from '../../global/theme'

export interface Guild {
    id: string
    name: string
    icon: string | null
    owner: boolean
}


interface GuildProps extends TouchableOpacityProps {
    data: Guild
}

export function Guild({ data, ...rest }: GuildProps) {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <GuildIcon />
            <View style={styles.content}>
                <View>
                    <Text style={styles.title}>
                        {data.name}
                    </Text>
                    <Text style={styles.ownerType}>
                        {data.owner ? 'Administrador' : 'Convidado'}
                    </Text>
                </View>
            </View>
            <Feather size={18} color={theme.colors.highlight} name="chevron-right" />
        </TouchableOpacity>
    )
}
