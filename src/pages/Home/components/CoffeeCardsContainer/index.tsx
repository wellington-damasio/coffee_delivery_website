import { ReactNode } from 'react'
import { CardsContainer } from './styles'

interface ChildrenProps {
    children?: ReactNode
}

export const CoffeeCardsContainer = ({ children }: ChildrenProps) => {
    return (
        <CardsContainer>
            <h2 className='container'>Nossos cafés</h2>
            <div className="container">
                {children}
            </div>
        </CardsContainer>
    )
}
