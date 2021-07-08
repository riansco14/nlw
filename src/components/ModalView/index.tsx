import React from 'react'
import { ReactNode } from 'react'
import { View, Modal, TouchableWithoutFeedback } from 'react-native'
import { ModalProps } from 'react-native'
import { Background } from '../Background'
import { styles } from './styles'

interface Props extends ModalProps {
    children: ReactNode,
    clodeModal: () => void
}

export function ModalView({ children, clodeModal, ...rest }: Props) {
    return (
        <Modal
            transparent
            animationType="slide"
            statusBarTranslucent
            {...rest}
        >
            <TouchableWithoutFeedback onPress={clodeModal}>
                <View style={styles.overlay}>
                    <View style={styles.container}>
                        <Background>
                            <View style={styles.bar} />
                            {children}
                        </Background>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}
