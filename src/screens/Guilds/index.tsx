import React, { useState } from 'react'
import { useEffect } from 'react'
import { FlatList } from 'react-native'
import { View } from 'react-native'
import { TextInput, TextInputProps } from 'react-native'
import { GuildProps } from '../../components/Agendamento'
import { Guild } from '../../components/Guild'
import { ListDivider } from '../../components/ListDivider'
import { Load } from '../../components/Load'
import { api } from '../../services/api'
import { styles } from './styles'

interface Props extends TextInputProps {
    handleGuildSelected: (guildSelected: GuildProps) => void
}

export function Guilds({ handleGuildSelected, ...rest }: Props) {
    const [guilds, setGuilds] = useState<GuildProps[]>([])
    const [loading, setLoading] = useState(true)




    async function fetchGuilds() {
        const response = await api.get("/users/@me/guilds")

        setGuilds(response.data)
        setLoading(false)
        
    }

    useEffect(() => {
        fetchGuilds()
    }, [])


    if (loading)
        return (<Load />)

    return (
        <View style={styles.container}>
            <FlatList
                data={guilds}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Guild
                    data={item}
                    onPress={() => handleGuildSelected(item)} />}
                ItemSeparatorComponent={() => <ListDivider isCentered />}
                contentContainerStyle={{ paddingBottom: 68, paddingTop: 20 }}
                ListHeaderComponent={() => <ListDivider isCentered />}
                style={styles.guilds}
            />
        </View>
    )
}
