import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { CardContainer, PriceContainer, QuantityButton, BuyButton } from './styles'
import coffees from '../../../../../api/coffees'
import { useState } from 'react'

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
            <small className="tag">{...tags}</small>
            <h3>{type}</h3>
            <p>{description}</p>
            <PriceContainer>
                <span className="price">{getFormattedPrice(price)}</span>
                <QuantityButton>
                    <button onClick={handleDecreaseBuyQtd}>
                        <Minus weight='bold' />
                    </button>
                    {buyQtd}
                    <button onClick={handleIncreaseBuyQtd}>
                        <Plus weight='bold' />
                    </button>
                </QuantityButton>
                <BuyButton>
                    <ShoppingCart weight='fill' size={20} />
                </BuyButton>
            </PriceContainer>
        </CardContainer>
    )
}