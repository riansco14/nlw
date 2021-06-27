import React from 'react'
import { View } from 'react-native'

import { styles } from './styles'

import { Profile } from '../../components/Profile'
import { ButtonAdd } from '../../components/ButtonAdd'
import { CategorySelect } from '../../components/CategorySelect'
import { useState } from 'react'

export function Home() {
    const [categorySelected, setCategorySelected] = useState('')

    function handleCategory(categoryId: string) {
        console.log("categoryId")
        if (categoryId === categorySelected)
            setCategorySelected('')
        else
            setCategorySelected(categoryId)
        
        console.log(categoryId)
        
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>

            <View>
                <CategorySelect
                    categorySelected={categorySelected}
                    setCategorySelected={handleCategory}
                />
            </View>
        </View>
    )
}
