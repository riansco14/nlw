import React, { useCallback, useEffect } from 'react'
import { useState } from 'react'
import { View, FlatList } from 'react-native'

import { Profile } from '../../components/Profile'
import { ButtonAdd } from '../../components/ButtonAdd'
import { CategorySelect } from '../../components/CategorySelect'
import { ListHeader } from '../../components/ListHeader'
import { Agendamento, AgendamentoProps } from '../../components/Agendamento'

import { styles } from './styles'
import { ListDivider } from '../../components/ListDivider'
import { Background } from '../../components/Background'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { COLLECTION_AGENDAMENTOS, COLLECTION_USER } from '../../configs/database'
import { Load } from '../../components/Load'

export function Home() {
    const navigation = useNavigation()

    const [agendamentos, setAgendamentos] = useState<AgendamentoProps[]>([])
    const [categorySelected, setCategorySelected] = useState('')
    const [loading, setLoading] = useState(false)

    async function loadAgendamentos() {
        
        setLoading(true)
        const response = await AsyncStorage.getItem(COLLECTION_AGENDAMENTOS)
        
        
        const storage: AgendamentoProps[] = response ? JSON.parse(response) : []

        if (categorySelected.length>0) {
            setAgendamentos(storage.filter((item) => item.category == categorySelected))
        } else {
            setAgendamentos(storage)
        
        }
        setLoading(false)

    }

    useFocusEffect(useCallback(
        () => {
            loadAgendamentos()
        },
        [categorySelected],
    ))

    function handleCategory(categoryId: string) {
        categoryId === categorySelected ? setCategorySelected('') : setCategorySelected(categoryId);
        
    }

    function handleAgendamentoDetalhes(guildSelected: AgendamentoProps) {
        navigation.navigate('AgendamentosDetails', {guildSelected: guildSelected})
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
                {loading ? <Load /> : <>
                    <ListHeader
                        title="Partidas agendadas"
                        subtitle={`Total ${agendamentos.length}`}
                    />
                    <FlatList
                        data={agendamentos}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <Agendamento onPress={()=>handleAgendamentoDetalhes(item)} data={item} />}
                        contentContainerStyle={{ paddingBottom: 68 }}
                        ItemSeparatorComponent={() => <ListDivider />}
                        style={styles.flatlistMatches}
                    />
                </>}

            </View>
        </Background>
    )
}
