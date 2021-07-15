import React, { ReactNode, useState } from 'react'
import { StyleSheet, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { Background } from '../../components/Background'
import { Header } from '../../components/Header'


import { styles } from './styles'
import { theme } from '../../global/theme'
import { Text } from 'react-native'
import { CategorySelect } from '../../components/CategorySelect'
import Feather from '@expo/vector-icons/Feather'
import { GuildIcon } from '../../components/GuildIcon'
import { SmallInput } from '../../components/SmallInput'
import { TextArea } from '../../components/TextArea'
import { Button } from '../../components/Button'
import { useNavigation } from '@react-navigation/native'
import { Guilds } from '../Guilds'
import { ModalView } from '../../components/ModalView'
import { Guild } from '../../components/Guild'

import uuid from 'react-native-uuid'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { COLLECTION_AGENDAMENTOS } from '../../configs/database'
import { AgendamentoProps, GuildProps } from '../../components/Agendamento'


interface Props {
    children: ReactNode
}

interface SelectServerProps extends RectButtonProps {
    guild?: GuildProps
}

const SelectServer = ({ guild, ...rest }: SelectServerProps) => {

    return (
        <RectButton {...rest} >
            <View style={stylesServer.container}>
                {
                    guild?.icon ?
                        <GuildIcon guildId={guild.id} iconId={guild.icon}  /> : <View style={stylesServer.image} />

                }
                <View style={stylesServer.labelContainer}>

                    <Text style={stylesServer.title}>{guild?.name ? guild.name : 'Selecione um servidor'}</Text>
                </View>
                <Feather style={stylesServer.icon} color={theme.colors.heading} size={18} name="chevron-right" />
            </View>
        </RectButton>
    )
}

const stylesServer = StyleSheet.create({
    container: {
        width: '100%',
        height: 64,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: theme.colors.secondary50,
        borderWidth: 1,
        borderRadius: 8,
        paddingRight: 25,
        overflow: "hidden"
    },
    labelContainer: {
        flex: 1,
        alignItems: 'center',

    },
    image: {
        width: 64,
        height: 68,
        backgroundColor: theme.colors.secondary50,
        borderWidth: 1,
        borderRadius: 8,
    },
    title: {
        fontFamily: theme.fonts.title700,
        fontSize: 18,
        color: theme.colors.heading
    },
    icon: {
        height: 24,
        width: 24
    }
})


export function AgendamentosCreate({ children }: Props) {
    const navigation = useNavigation()
    const [openModalGuilds, setOpenModalGuilds] = useState(false)
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps)

    const [dia, setDia] = useState('')
    const [mes, setMes] = useState('')
    const [hora, setHora] = useState('')
    const [minuto, setMinuto] = useState('')
    const [descricao, setDescricao] = useState('')



    function handleOpenGuilds() {
        setOpenModalGuilds(true)
    }

    function handleCloseGuilds() {
        setOpenModalGuilds(false)
    }

    function handleGuildSelect(guildSelect: GuildProps) {
        setGuild(guildSelect)
        console.log('RESULTADO DISSO'+ JSON.stringify(guildSelect));
        
        setOpenModalGuilds(false)
    }


    const [categorySelected, setCategorySelected] = useState('')

    function handleCategory(categoryId: string) {
        if (categoryId===categorySelected)
            setCategorySelected('')
        setCategorySelected(categoryId)
        
    }

    function handleAgendar() {
        navigation.navigate("Guilds")
    }

    async function handleSave() {
        const newAgendamento: AgendamentoProps = {
            id: uuid.v4().toString(),
            guild: guild,
            category: categorySelected,
            date: `${dia}/${mes} às ${hora}:${minuto}h`,
            descricao: descricao
        }
        console.log(newAgendamento);
        
        
        const storage = await AsyncStorage.getItem(COLLECTION_AGENDAMENTOS)
        const agendamentos = storage ? JSON.parse(storage) : []
        await AsyncStorage.setItem(COLLECTION_AGENDAMENTOS, JSON.stringify([...agendamentos, newAgendamento]))
        
        navigation.navigate('Home')
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={
                Platform.OS === 'ios' ? 'padding' : 'height'
            }
        >
            <ScrollView>
                <Background>
                    <View>
                        <Header
                            title="Agendar partida"
                        />
                        <Text style={styles.label}>
                            Categoria
                        </Text>

                        <CategorySelect categorySelected={categorySelected} setCategorySelected={handleCategory} />
                        <View style={styles.form}>

                            <SelectServer guild={guild} onPress={handleOpenGuilds} />
                            <View style={styles.fieldData}>
                                <View>
                                    <View>
                                        <Text style={[styles.titleData, { marginBottom: 8 }]}>Dia e mês</Text>
                                    </View>
                                    <View style={styles.column}>
                                        <SmallInput maxLength={2} onChangeText={setDia} />
                                        <Text style={styles.divider}>/</Text>
                                        <SmallInput maxLength={2} onChangeText={setMes} />
                                    </View>

                                </View>
                                <View>
                                    <View>
                                        <Text style={[styles.titleData, { marginBottom: 8 }]}>Hora e minuto</Text>
                                    </View>
                                    <View style={styles.column}>
                                        <SmallInput maxLength={2} onChangeText={setHora} />
                                        <Text style={styles.divider}>:</Text>
                                        <SmallInput maxLength={2}  onChangeText={setMinuto} />
                                    </View>

                                </View>
                            </View>
                            <View style={styles.descricaoHeader}>
                                <Text style={styles.labelDescricao}>Descrição</Text>
                                <Text style={styles.caracteresLimit}>Max 100 caracteres</Text>
                            </View>
                            <TextArea multiline maxLength={100} numberOfLines={5} autoCorrect={false} onChangeText={setDescricao} />

                            <View style={styles.footer}>

                                <Button title="Agendar" onPress={handleSave} />
                            </View>
                        </View>


                    </View>
                </Background>
            </ScrollView>
            <ModalView visible={openModalGuilds} clodeModal={handleCloseGuilds}>
                <Guilds handleGuildSelected={handleGuildSelect} />
            </ModalView>
        </KeyboardAvoidingView >
    )
}
