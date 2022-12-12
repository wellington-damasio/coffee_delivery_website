import { Link } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../../assets/icons/logo.svg'
import { HeaderContainer, LocationContainer, CartContainer } from './styles'

export const Header = () => {
    return (
        <HeaderContainer className='container'>
            <Link to='/'><img src={logo} alt="" /></Link>

            <LocationContainer>
                <MapPin
                    size={22}
                    weight='fill'
                    color='#8047f8'
                />
                Porto Alegre, RS
            </LocationContainer>

            <CartContainer>
                <Link to='/checkout'>
                    <ShoppingCart
                        size={22}
                        weight='fill'
                        color='#c47f17'
                    />
                </Link>
            </CartContainer>
        </HeaderContainer>
    )
}