import React, { ReactNode, useContext, useState } from 'react'

import * as AuthSession from 'expo-auth-session'
import { createContext } from 'react'

import {
    REDIRECT_URI,
    SCOPE,
    RESPONSE_TYPE,
    CLIENT_ID,
    CDN_IMAGE,
} from '../configs'
import { api } from '../services/api'

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

}

interface AuthorizationResponse {
    params: {
        access_token: string
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
            
            if (type === 'success') {
                api.defaults.headers.authorization = `Bearer ${params.access_token}`

                const userInfo = await api.get('/users/@me')
                console.log(userInfo);

                const firstname = userInfo.data.username.split(' ')[0]
                userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`

                setUser({
                    ...userInfo.data,
                    firstname,
                    token: params.access_token
                })

                setLoading(false)
            }
            else {
                setLoading(false)
            }
        } catch {
            throw new Error("Não foi possível autenticar")
        } finally {
        }
    }

    return (
        <AuthContext.Provider value={{ user, loading, signIn }}>
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
