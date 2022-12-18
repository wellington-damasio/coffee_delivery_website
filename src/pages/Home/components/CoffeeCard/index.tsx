import { ShoppingCart } from 'phosphor-react'
import { CardContainer, PriceContainer, BuyButton } from './styles'
import { useState, useContext } from 'react'
import { QuantityButton } from '../../../../components/QuantityButton'
import { OrdersContext } from '../../../../contexts/OrdersContext'

interface CoffeeCardProps {
    id: string
    imgUrl: string
    type: string
    tags: string[]
    description: string
    price: number
    availableQtd: number
}

export const CoffeeCard = (props: CoffeeCardProps) => {
    const { id, imgUrl, type, tags, description, price, availableQtd } = props
    const { setOrders } = useContext(OrdersContext)

    const [buyQtd, setBuyQtd] = useState(1)

    const handleDecreaseBuyQtd = () => {
        if (buyQtd > 1) setBuyQtd((state: number) => state - 1)
    }
    const handleIncreaseBuyQtd = () => {
        if (buyQtd < availableQtd) setBuyQtd((state: number) => state + 1)
    }
    const getFormattedPrice = (price: number) => {
        return price.toFixed(2).toString().replace('.', ',')
    }

    return (
        <CardContainer>
            <img src={imgUrl} alt="" />
            <div className="tags">
                {
                    tags.map((tag, i) => {
                        return <small key={i} className="tag">{tag}</small>
                    })
                }
            </div>
            <h3>{type}</h3>
            <p>{description}</p>
            <PriceContainer>
                <span className="price">{getFormattedPrice(price)}</span>
                <QuantityButton
                    handleSubtraction={handleDecreaseBuyQtd}
                    handleAddition={handleIncreaseBuyQtd}
                    quantity={buyQtd}
                />
                <BuyButton
                    onClick={() => setOrders(state => {
                        const existingOrder = [...state].find(order => order?.id === id)
                        if (existingOrder) {
                            //Remove already existing order and replace with a 
                            //new one
                            return [...state].filter(order => order.id !== id)
                                .concat({ id, buyQtd })
                        } else {
                            return [...state, { id, buyQtd }]
                        }
                    })}
                >
                    <ShoppingCart weight='fill' size={20} />
                </BuyButton>
            </PriceContainer>
        </CardContainer>
    )
}