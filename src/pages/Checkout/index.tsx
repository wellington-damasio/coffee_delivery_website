import { useContext } from "react"

import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import { OrdersContext, UserDataTypes } from "../../contexts/OrdersContext"

import { OrderForm } from "./components/OrderForm"
import { SelectedCoffees } from "./components/SelectedCoffees"

import { FormContainer } from "./styles"

export const Checkout = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        setValue
    } = useForm<UserDataTypes>()
    const { setUserData, orders, setOrders } = useContext(OrdersContext)
    const navigate = useNavigate()

    const onSubmit: SubmitHandler<UserDataTypes> = (data) => {
        if (orders.length > 0) {
            setUserData(data)
            setOrders([])
            navigate('/success')
        }
    }

    return (
        <FormContainer onSubmit={handleSubmit(onSubmit)} className="container">
            <OrderForm
                registerInput={register}
                errors={errors}
                watch={watch}
                setValue={setValue}
            />
            <SelectedCoffees orders={orders} setOrders={setOrders} />
        </FormContainer>
    )
}