import React, { ReactNode } from 'react'

import { styles } from './styles'
import { View } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { GuildIcon } from '../GuildIcon'
import { Text } from 'react-native'

import PlayerSvg from '../../assets/player.svg'
import CalendarSvg from '../../assets/calendar.svg'

import { theme } from '../../global/theme'
import { categories } from '../../utils/categories'


export interface GuildProps {
    id: string,
    name: string,
    icon: null,
    owner: boolean
}

export interface AgendamentoProps {
    id: string
    guild: GuildProps
    category: string
    date: string
    description: string
}

interface Props extends RectButtonProps {
    data: AgendamentoProps
}


export function Agendamento({ data, ...rest }: Props) {
    const { primary, on } = theme.colors
    const categoryFiltered = categories.filter(item => item.id === data.category)[0]
    return (
        <RectButton {...rest}>
            <View style={styles.container}>
                <GuildIcon />

                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.title}>{data.guild.name}</Text>
                        <Text style={styles.category}>{categoryFiltered.title}</Text>
                    </View>
                    {/*<View>
                        <Text style={styles.gameInfo}></Text>
                    </View>*/}

                    <View style={styles.footer}>
                        <View style={styles.dateInfo}>
                            <CalendarSvg width={16} height={16} />
                            <Text style={styles.date}>{ data.date}</Text>
                        </View>
                        <View style={styles.playersInfo}>
                            <PlayerSvg width={16} height={16} fill={data.guild.owner ? primary : on} />
                            <Text style={[styles.players]}>{data.guild.owner? 'Anfitrião': 'Visitante'}</Text>
                        </View>
                    </View>

                </View>

            </View>
        </RectButton>
    )
}
