import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import motoBoyIllustration from '../../assets/images/motoboy.svg'
import { OrdersContext } from '../../contexts/OrdersContext'
import { OrderInfoContainer, Container, IconContainer } from './styles'

export const Success = () => {
    const { userData } = useContext(OrdersContext)
    const capitalizeWords = (phrase: string) => {
        return phrase.replace(/-!@#$%¨&*\(\)_=+{}^~;.,\/\|\'\"?/ig, " ")
            .split(' ')
            .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
            .join(' ')
    }

    const translatePaymentMethod = (paymentMethod: string) => {
        switch (paymentMethod) {
            case 'debit-card':
                return 'Cartão de Débito'
            case 'credit-card':
                return 'Cartão de Crédito'
            case 'money':
                return 'Dinheiro'
            default:
                return 'Método de pagamento não selecionado'
        }
    }
    return (
        <Container className='container'>
            <div>
                <h2>Uhu! Pedido confirmado</h2>
                <p>Agora é só aguardar que logo o café chegará até você</p>
                <OrderInfoContainer>
                    <div>
                        <IconContainer iconColor='purple'>
                            <MapPin weight='fill' />
                        </IconContainer>
                        <p>
                            <span>Entrega em <span className="bold">{capitalizeWords(userData.street)}, {userData.houseNumber}</span>
                            </span>
                            <span>{capitalizeWords(userData.neighbourhood)} - {capitalizeWords(userData.city)}, {capitalizeWords(userData.state)}</span>
                        </p>
                    </div>

                    <div>
                        <IconContainer iconColor='yellow'>
                            <Timer weight='fill' />
                        </IconContainer>
                        <p>
                            <span>Previsão de entrega</span>
                            <span className='bold'>20 min - 30 min</span>
                        </p>
                    </div>

                    <div>
                        <IconContainer iconColor='dark-yellow'>
                            <CurrencyDollar weight='fill' />
                        </IconContainer>
                        <p>
                            <span>Pagamento na entrega</span>
                            <span className='bold'>{translatePaymentMethod(userData.paymentMethod)}</span>
                        </p>
                    </div>
                </OrderInfoContainer>
            </div>
            <img src={motoBoyIllustration} alt="" />
        </Container>
    )
}