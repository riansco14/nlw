import React, { ReactNode, useState } from 'react'
import { StyleSheet, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { Background } from '../../components/Background'
import { Header } from '../../components/Header'


import { styles } from './styles'
import { theme } from '../../global/theme'
import { Text } from 'react-native'
import { CategorySelect } from '../../components/CategorySelect'
import { Avatar } from '../../components/Avatar'
import Feather from '@expo/vector-icons/Feather'
import { GuildIcon } from '../../components/GuildIcon'
import { SmallInput } from '../../components/SmallInput'
import { TextArea } from '../../components/TextArea'
import { Button } from '../../components/Button'
import { useNavigation } from '@react-navigation/native'
import { Guilds } from '../Guilds'
import { ModalView } from '../../components/ModalView'
import { Guild } from '../../components/Guild'

interface Props {
    children: ReactNode
}

interface SelectServerProps extends RectButtonProps {
    guild?: Guild
}

const SelectServer = ({ guild, ...rest }: SelectServerProps) => {

    return (
        <RectButton {...rest} >
            <View style={stylesServer.container}>
                {
                    guild?.icon ?
                        <GuildIcon /> : <View style={stylesServer.image} />

                }
                <View style={stylesServer.labelContainer}>
                    
                    <Text style={stylesServer.title}>{guild?.name ? guild.name :'Selecione um servidor'}</Text>
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
    const [guild, setGuild] = useState<Guild>({} as Guild)

    console.log(guild);

    function handleOpenGuilds() {
        setOpenModalGuilds(true)
    }

    function handleGuildSelect(guildSelect: Guild) {
        setGuild(guildSelect)
        setOpenModalGuilds(false)
    }

    const members = [
        {
            id: '1',
            username: 'Rodrigo',
            avatar_url: 'https://github.com/riansco14.png',
            status: 'online'
        },
        {
            id: '2',
            username: 'Rodrigo',
            avatar_url: 'https://github.com/riansco14.png',
            status: 'offline'
        },
    ]

    const [categorySelected, setCategorySelected] = useState('')

    function handleCategory(categoryId: string) {
        console.log("categoryId")
        if (categoryId === categorySelected)
            setCategorySelected('')
        else
            setCategorySelected(categoryId)

        console.log(categoryId)

    }

    function handleAgendar() {
        navigation.navigate("Guilds")
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

                        <CategorySelect categorySelected={categorySelected} setCategorySelected={setCategorySelected} />
                        <View style={styles.form}>

                            <SelectServer guild={guild} onPress={handleOpenGuilds} />
                            <View style={styles.fieldData}>
                                <View>
                                    <View>
                                        <Text style={styles.titleData}>Dia e mês</Text>
                                    </View>
                                    <View style={styles.column}>
                                        <SmallInput maxLength={2} />
                                        <Text style={styles.divider}>/</Text>
                                        <SmallInput maxLength={2} />
                                    </View>

                                </View>
                                <View>
                                    <View>
                                        <Text style={styles.titleData}>Hora e minuto</Text>
                                    </View>
                                    <View style={styles.column}>
                                        <SmallInput maxLength={2} />
                                        <Text style={styles.divider}>:</Text>
                                        <SmallInput maxLength={2} />
                                    </View>

                                </View>
                            </View>
                            <View style={styles.descricaoHeader}>
                                <Text style={styles.labelDescricao}>Descrição</Text>
                                <Text style={styles.caracteresLimit}>Max 100 caracteres</Text>
                            </View>
                            <TextArea multiline maxLength={100} numberOfLines={5} autoCorrect={false} />

                            <View style={styles.footer}>

                                <Button title="Agendar" onPress={handleAgendar}></Button>
                            </View>
                        </View>


                    </View>
                </Background>
            </ScrollView>
            <ModalView visible={openModalGuilds}>
                <Guilds handleGuildSelected={handleGuildSelect} />
            </ModalView>
        </KeyboardAvoidingView >
    )
}
