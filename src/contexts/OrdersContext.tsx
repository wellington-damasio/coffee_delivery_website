import coffees from "../api/coffees";
import React, { useState, useEffect } from "react";
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
    removeCoffeeOrder: any
    totalItemsPrice: number
    deliveryTaxPrice: number
    totalPrice: number
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

    const removeCoffeeOrder = (id: string) => {
        setOrders((state: CoffeeOrderTypes[]) => {
            return [...state].filter(order => order.id !== id)
        })
    }

    const getTotalItemsPrice = () => {
        if (orders.length > 0) {
            return orders
                .map(order => {
                    const coffee = coffees.find(coffee => coffee.id === order.id)

                    if (coffee) {
                        return { buyQtd: order.buyQtd, price: coffee.price }
                    } else {
                        return { buyQtd: 0, price: 0 }
                    }
                })
                .reduce((curr, next) => {
                    if (next) {
                        return curr + next.buyQtd * next.price
                    } else {
                        return 0
                    }
                }, 0)
        } else {
            return 0
        }
    }
    const getDeliveryTaxPrice = () => orders.length * 3.5
    const getTotalPrice = () => getTotalItemsPrice() + getDeliveryTaxPrice()

    const [totalItemsPrice, setTotalItemsPrice] = useState(getTotalItemsPrice())
    const [deliveryTaxPrice, setDeliveryTaxPrice] = useState(getDeliveryTaxPrice())
    const [totalPrice, setTotalPrice] = useState(getTotalPrice())

    useEffect(() => {
        setTotalItemsPrice(getTotalItemsPrice())
        setDeliveryTaxPrice(getDeliveryTaxPrice())
        setTotalPrice(getTotalPrice())
    }, [orders])

    return (
        <OrdersContext.Provider value={{
            orders,
            userData,
            setUserData,
            setOrders,
            removeCoffeeOrder,
            totalItemsPrice,
            deliveryTaxPrice,
            totalPrice
        }}>
            {children}
        </OrdersContext.Provider>
    )
}