import React from 'react'
import { FlatList } from 'react-native'
import { View } from 'react-native'
import { TextInput, TextInputProps } from 'react-native'
import { Guild } from '../../components/Guild'
import { ListDivider } from '../../components/ListDivider'
import { styles } from './styles'

interface Props extends TextInputProps{
    handleGuildSelected: (guildSelected: Guild) => void
}

export function Guilds({ handleGuildSelected, ...rest }: Props) {
    const guilds = [{
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
    },
    {
        id: '2',
        name: 'Lendários',
        icon: null,
        owner: false
    }
    ]


    return (
        <View style={styles.container}>
            <FlatList
                data={guilds}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Guild
                    data={item}
                    onPress={() => handleGuildSelected(item)} />}
                ItemSeparatorComponent={() => <ListDivider />}
                style={styles.guilds}
            />
        </View>
    )
}
