import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'

import { Avatar } from '../Avatar'
import { ButtonAdd } from '../ButtonAdd'
import { useAuth } from '../../hooks/auth'
export function Profile() {
    const { user } = useAuth()
    return (
        <View style={styles.container}>
            <Avatar urlImage={user.avatar} />
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>
                    <Text style={styles.username}>
                        {user.firstname}
                    </Text>
                </View>
                <Text style={styles.message}>
                    Hoje é dia de vitoria
                </Text>
            </View>
        </View>
    )
}
