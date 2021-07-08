import React from 'react'
import { useState } from 'react'
import { View, FlatList } from 'react-native'

import { Profile } from '../../components/Profile'
import { ButtonAdd } from '../../components/ButtonAdd'
import { CategorySelect } from '../../components/CategorySelect'
import { ListHeader } from '../../components/ListHeader'
import { Agendamento } from '../../components/Agendamento'

import { styles } from './styles'
import { ListDivider } from '../../components/ListDivider'
import { Background } from '../../components/Background'
import { useNavigation } from '@react-navigation/native'

export function Home() {
    const navigation = useNavigation()

    const [categorySelected, setCategorySelected] = useState('')

    const agendamentos = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendarios',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challeger sem perder nenhuma partida'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Lendarios',
                icon: null,
                owner: false
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challeger sem perder nenhuma partida'
        }
    ]

    function handleCategory(categoryId: string) {
        console.log("categoryId")
        if (categoryId === categorySelected)
            setCategorySelected('')
        else
            setCategorySelected(categoryId)

        console.log(categoryId)

    }

    function handleAgendamentoDetalhes() {
        console.log("Chegou");
        navigation.navigate('AgendamentosDetails')
    }

    function handleAgendamentosCreate() {
        navigation.navigate("AgendamentosCreate")
    }

    return (
        <Background>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Profile />
                    <ButtonAdd onPress={handleAgendamentosCreate} />
                </View>

                <View>
                    <CategorySelect
                        categorySelected={categorySelected}
                        setCategorySelected={handleCategory}
                    />
                </View>

                <ListHeader
                    title="Partidas agendadas"
                    subtitle="Total 6"
                />

                <FlatList
                    data={agendamentos}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <Agendamento onPress={handleAgendamentoDetalhes} data={item} />}
                    contentContainerStyle={{paddingBottom: 68}}
                    ItemSeparatorComponent={() => <ListDivider />}
                    style={styles.flatlistMatches}
                />
            </View>
        </Background>
    )
}
