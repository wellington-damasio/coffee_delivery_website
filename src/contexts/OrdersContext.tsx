import React, { useState } from "react";
import { createContext } from "react";

interface PropsTypes {
    children: React.ReactNode
}

export interface CoffeeOrderTypes {
    id: string
    buyQtd: number
}

export interface UserDataTypes {
    cep: string
    street: string
    houseNumber: number
    neighbourhood: string
    city: string
    state: string
    additionalInfo?: string
    paymentMethod: string
}

interface OrdersTypes {
    orders: CoffeeOrderTypes[]
    userData: UserDataTypes
    setUserData: React.Dispatch<React.SetStateAction<UserDataTypes>>
    setOrders: React.Dispatch<React.SetStateAction<CoffeeOrderTypes[]>>
}

export const OrdersContext = createContext({} as OrdersTypes)

export const OrdersContextProvider = (props: PropsTypes) => {
    const { children } = props
    const [orders, setOrders] = useState<CoffeeOrderTypes[]>([])
    const [userData, setUserData] = useState<UserDataTypes>({
        cep: '',
        street: '',
        houseNumber: 0,
        neighbourhood: '',
        city: '',
        state: '',
        additionalInfo: '',
        paymentMethod: ''
    })
    return (
        <OrdersContext.Provider value={{
            orders,
            userData,
            setUserData,
            setOrders
        }}>
            {children}
        </OrdersContext.Provider>
    )
}