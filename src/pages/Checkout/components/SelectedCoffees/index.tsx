import { useContext, useEffect, useState } from 'react'
import { CoffeeOrderTypes, OrdersContext } from '../../../../contexts/OrdersContext'
import coffees from '../../../../api/coffees'
import { QuantityButton } from '../../../../components/QuantityButton'
import { Container, FormContainer, CoffeeContainer, PriceContainer } from './styles'
import { Trash } from 'phosphor-react'

interface CoffeeProps {
    id: string
    type: string
    imgUrl: string
    price: number
    buyQtd: number
    availableQtd: number
    handleRemoveOrder: any
    setOrders: any
    orders: any
}

const getFormattedPrice = (price: any) => {
    return price.toFixed(2).toString().replace('.', ',')
}

const Coffee = (props: CoffeeProps) => {
    const { id, imgUrl, type, price, availableQtd, handleRemoveOrder, setOrders, } = props

    const [buyQtd, setBuyQtd] = useState(props.buyQtd)

    const handleDecreaseBuyQtd = () => {
        if (buyQtd > 1) {
            setBuyQtd((state: number) => state - 1)
            setOrders((state: CoffeeOrderTypes[]) => {
                return state.map(order => {
                    if (order.id === id) {
                        return { id: order.id, buyQtd: order.buyQtd - 1 }
                    } else {
                        return order
                    }
                })
            })
        }
    }
    const handleIncreaseBuyQtd = () => {
        if (buyQtd < availableQtd) {
            setBuyQtd((state: number) => state + 1)
            setOrders((state: CoffeeOrderTypes[]) => {
                return state.map(order => {
                    if (order.id === id) {
                        return { id: order.id, buyQtd: order.buyQtd + 1 }
                    } else {
                        return order
                    }
                })
            })
        }
    }

    return (
        <CoffeeContainer>
            <img src={imgUrl} alt="" />
            <div className='edit-order'>
                <p>{type}</p>
                <div>
                    <QuantityButton
                        quantity={buyQtd}
                        handleAddition={handleIncreaseBuyQtd}
                        handleSubtraction={handleDecreaseBuyQtd}
                    />
                    <button
                        onClick={() => handleRemoveOrder(id)}
                        type='button'
                        className='remove-btn'
                    >
                        <span className="icon"><Trash /></span>
                        Remover
                    </button>
                </div>
            </div>
            <span className="price">{
                getFormattedPrice(price * buyQtd)
            }</span>
        </CoffeeContainer>
    )
}

export const SelectedCoffees = () => {
    const {
        orders,
        setOrders,
        totalItemsPrice,
        totalPrice,
        deliveryTaxPrice,
        removeCoffeeOrder
    } = useContext(OrdersContext)

    return (
        <Container>
            <h2>Cafés selecionados</h2>
            <FormContainer>
                {
                    orders.map(order => {
                        const coffee = coffees.find(coffee => coffee.id === order.id)

                        if (coffee) {
                            return (
                                <Coffee
                                    key={coffee.id}
                                    id={coffee.id}
                                    imgUrl={coffee.coffee_img_url}
                                    type={coffee.type}
                                    price={coffee.price}
                                    buyQtd={order.buyQtd}
                                    availableQtd={coffee.qtd}
                                    handleRemoveOrder={removeCoffeeOrder}
                                    orders={orders}
                                    setOrders={setOrders}
                                />
                            )
                        }
                    })
                }
                <PriceContainer>
                    <div>
                        <span>Total de itens</span>
                        <span>{getFormattedPrice(totalItemsPrice)}</span>
                    </div>
                    <div>
                        <span>Entrega</span>
                        <span>{getFormattedPrice(deliveryTaxPrice)}</span>
                    </div>
                    <div>
                        <span>Total</span>
                        <span>{getFormattedPrice(totalPrice)}</span>
                    </div>
                </PriceContainer>
                <button type="submit">Confirmar Pedido</button>
            </FormContainer>
        </Container>
    )
}
