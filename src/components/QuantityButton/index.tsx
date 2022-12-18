import { QuantityButtonContainer } from "./styles"
import { Minus, Plus } from "phosphor-react"

interface PropsData {
    quantity: number
    handleSubtraction: () => void
    handleAddition: () => void
}


export const QuantityButton = (props: PropsData) => {
    const { quantity, handleSubtraction, handleAddition } = props
    return (
        <QuantityButtonContainer>
            <button onClick={handleSubtraction} type='button'>
                <Minus weight='regular' />
            </button>
            {quantity}
            <button onClick={handleAddition} type='button'>
                <Plus weight='regular' />
            </button>
        </QuantityButtonContainer>
    )
}