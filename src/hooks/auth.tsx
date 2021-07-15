import React, { ReactNode, createContext, useContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as AuthSession from 'expo-auth-session'

const { REDIRECT_URI } = process.env
const { SCOPE } = process.env
const { RESPONSE_TYPE } = process.env
const { CLIENT_ID } = process.env
const { CDN_IMAGE } = process.env

import { api } from '../services/api'
import { COLLECTION_USER, COLLECTION_AGENDAMENTOS } from '../configs/database'

interface User {
    id: string
    username: string
    firstname: string
    avatar: string
    email: string
    token: string
}

interface AuthContextProps {
    user: User,
    loading: boolean
    signIn: () => Promise<void>
    signOut: () => Promise<void>

}

interface AuthorizationResponse {
    params: {
        access_token?: string
        error?: string
    },
    type: string
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User>({} as User)
    const [loading, setLoading] = useState(false)

    async function signIn() {
        try {
            setLoading(true)

            const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`
            console.log(authUrl);

            const response = await AuthSession.startAsync({ authUrl }) as AuthorizationResponse
            const { params, type } = response

            if (type === 'success' && !params.error) {
                api.defaults.headers.authorization = `Bearer ${params.access_token}`

                const userInfo = await api.get('/users/@me')
                console.log(userInfo);

                const firstname = userInfo.data.username.split(' ')[0]
                userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`
                
                const userData = {
                    ...userInfo.data,
                    firstname,
                    token: params.access_token
                }
                await AsyncStorage.setItem(COLLECTION_USER, JSON.stringify(userData))

                setUser(userData)
            }
        } catch {
            throw new Error("Não foi possível autenticar")
        } finally {
            setLoading(false)
        }
    }

    async function signOut() {
        setUser({} as User)
        await AsyncStorage.removeItem(COLLECTION_USER)
    }

    async function loadUserStorageData() {
        const storage = await AsyncStorage.getItem(COLLECTION_USER)

        if (storage) {
            const userLogged = JSON.parse(storage) as User
            api.defaults.headers.authorization = `Bearer ${userLogged.token}`
            setUser(userLogged)
        }
    }

    useEffect(() => {
        loadUserStorageData()
    }, [])

    return (
        <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
            {children}
        </AuthContext.Provider>)
}

function useAuth() {
    const context = useContext(AuthContext)
    return context
}

export {
    AuthProvider,
    useAuth
}
