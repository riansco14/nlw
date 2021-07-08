import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { theme } from '../global/theme'

import { Home } from '../screens/Home'
import { AgendamentosDetails } from '../screens/AgendamentosDetails'
import { AgendamentosCreate } from '../screens/AgendamentosCreate'
import { Guilds } from '../screens/Guilds'

const { Navigator, Screen } = createStackNavigator()

export default function AuthRoutes() {
    return (
        <Navigator
            headerMode="none"
            screenOptions={{
                cardStyle: {
                    backgroundColor: theme.colors.secondary100
                }
            }}
        >
            <Screen
                name="Home"
                component={Home}
            />

            <Screen
                name="AgendamentosDetails"
                component={AgendamentosDetails}
            />

            <Screen
                name="AgendamentosCreate"
                component={AgendamentosCreate}
            />

            <Screen
                name="Guilds"
                component={Guilds}
            />
        </Navigator>
    )
}
