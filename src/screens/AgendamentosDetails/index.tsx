import React, { ReactNode } from 'react'
import { View } from 'react-native'
import Fontisto from '@expo/vector-icons/Fontisto'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Background } from '../../components/Background'
import { Header } from '../../components/Header'


import { styles } from './styles'
import { theme } from '../../global/theme'
import BannerImg from '../../assets/banner.png'
import { ImageBackground } from 'react-native'
import { Text } from 'react-native'
import { ListHeader } from '../../components/ListHeader'
import { FlatList } from 'react-native'
import { Member } from '../../components/Member'
import { ListDivider } from '../../components/ListDivider'
import { ButtonIcon } from '../../components/ButtonIcon'

interface Props {
    children: ReactNode
}

export function AgendamentosDetails({ children }: Props) {
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
    return (
        <Background>
            <View style={styles.container}>
                <Header
                    title="Detalhes"
                    action={
                        <BorderlessButton>
                            <Fontisto
                                size={24}
                                name="share"
                                color={theme.colors.primary}
                            />
                        </BorderlessButton>
                    }
                />
                <ImageBackground source={BannerImg} style={styles.banner} >
                    <View style={styles.bannerContent}>
                        <Text style={styles.title}>Lendários</Text>
                        <Text style={styles.subtitle}>É hoje que vamos chegar ao challenger sem perder uma partida da md10</Text>
                    </View>

                </ImageBackground>

                <ListHeader title="Jogadores" subtitle="Total 3" />

                <FlatList
                    data={members}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                    (<Member
                        data={item}
                    />)
                    }
                    ItemSeparatorComponent={() => <ListDivider />}
                    style={styles.members}
                />

            </View>
            <ButtonIcon style={styles.footer}  title="Entrar na partida" />
        </Background>
    )
}
