import React from 'react'

import { styles } from './styles'
import { theme } from '../../global/theme'
import { View } from 'react-native'
import { Text } from 'react-native'
import { Avatar } from '../Avatar'

export type MemberProps = {
    id: string
    username: string
    avatar_url: string
    status: string
}

type Props = {
    data: MemberProps
}

export function Member({ data }: Props) {
    const { id,
        username,
        avatar_url,
        status, } = data

    const isOnline = status === 'online'

    const { secondary80, secondary100 } = theme.colors
    return (
        <View style={styles.container}>
            <Avatar urlImage={avatar_url} />

            <View style={styles.membroContent}>
                <Text style={styles.title}>{username}</Text>
                <View style={styles.status}>

                    <View style={[styles.bulletStatus,  { backgroundColor: isOnline  ? theme.colors.on : theme.colors.primary}]} />
                    <Text style={styles.subtitle}>{status === 'online' ? 'Disponível' : 'Indisponível'}</Text>
                </View>
            </View>
        </View>

    )
}
