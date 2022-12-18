import { useState } from 'react'
import { CoffeeOrderTypes } from '../../../../contexts/OrdersContext'
import coffees from '../../../../../api/coffees'
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
}

const getFormattedPrice = (price: any) => {
    return price.toFixed(2).toString().replace('.', ',')
}

const Coffee = (props: CoffeeProps) => {
    const { id, imgUrl, type, price, availableQtd, handleRemoveOrder } = props

    const [buyQtd, setBuyQtd] = useState(props.buyQtd)

    const handleDecreaseBuyQtd = () => {
        if (buyQtd > 1) setBuyQtd((state: number) => state - 1)
    }
    const handleIncreaseBuyQtd = () => {
        if (buyQtd < availableQtd) setBuyQtd((state: number) => state + 1)
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

interface SelectedCoffeesProps {
    orders: CoffeeOrderTypes[]
    setOrders: any
}

export const SelectedCoffees = (props: SelectedCoffeesProps) => {
    const { orders, setOrders } = props

    const totalPrice = orders.length > 0
        ? orders
            .map((order) => {
                const coffee = coffees.find(coffee => coffee.id === order.id)
                if (coffee) {
                    return coffee.price * order.buyQtd
                } else {
                    return 0
                }
            })
            .reduce((current, next) => {
                if (current && next) {
                    return current + next
                } else {
                    return 0
                }
            })
        : 0

    const deliveryTax = orders.length * 3.5

    const removeCoffeeOrder = (id: string) => {
        setOrders((state: CoffeeOrderTypes[]) => {
            return [...state].filter(order => order.id !== id)
        })
    }

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
                                />
                            )
                        }
                    })
                }
                <PriceContainer>
                    <div>
                        <span>Total de itens</span>
                        <span>{getFormattedPrice(totalPrice)}</span>
                    </div>
                    <div>
                        <span>Entrega</span>
                        <span>{getFormattedPrice(deliveryTax)}</span>
                    </div>
                    <div>
                        <span>Total</span>
                        <span>{getFormattedPrice(totalPrice + deliveryTax)}</span>
                    </div>
                </PriceContainer>
                <button type="submit">Confirmar Pedido</button>
            </FormContainer>
        </Container>
    )
}
