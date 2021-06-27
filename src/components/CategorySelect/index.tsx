import React from 'react'
import { styles } from './styles'
import { theme } from '../../global/theme'
import { ScrollView } from 'react-native'
import { categories } from '../../utils/categories'
import { Category } from '../Category'

interface CategorySelectProps{
    categorySelected: string
    setCategorySelected: (categoryId: string) => void
}
export function CategorySelect({categorySelected, setCategorySelected}:CategorySelectProps) {
    return (
        <ScrollView
            horizontal
            style={styles.container}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingRight: 40}}
        >
            {
                categories.map(categoria => (
                    <Category
                        key={categoria.id}
                        title={categoria.title}
                        icon={ categoria.icon}
                        checked={categoria.id === categorySelected}
                        onPress={()=>setCategorySelected(categoria.id)}
                    ></Category>
                ))
            }
            
        </ScrollView>
    )
}
