import { Link } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../../assets/icons/logo.svg'
import { HeaderContainer, LocationContainer, CartContainer } from './styles'
import { useContext, useEffect, useRef, useState } from 'react'
import { OrdersContext } from '../../contexts/OrdersContext'

export const Header = () => {
    const { orders } = useContext(OrdersContext)
    const cartLink = useRef(null)
    const [userLocation, setUserLocation] = useState('Brasil')

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            const latitute = position.coords.latitude
            const longitude = position.coords.longitude
            const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitute}&longitude=${longitude}&localityLanguage=pt`
            fetch(geoApiUrl)
                .then(res => res.json())
                .then(data => setUserLocation(`${data.city} - ${data.principalSubdivisionCode.slice(3)}`))
        })
    }, [])
    return (
        <HeaderContainer className='container'>
            <Link to='/'>
                <img src={logo} alt="" className='logo' />
            </Link>

            <LocationContainer>
                <MapPin
                    size={22}
                    weight='fill'
                    color='#8047f8'
                />
                {userLocation}
            </LocationContainer>

            <CartContainer>
                {
                    orders.length > 0 ? (
                        <span className='cart-quantity'>
                            {orders.length > 10 ? 9 : orders.length}
                        </span>
                    ) : null
                }
                <Link
                    to='/checkout'
                    ref={cartLink}
                    onClick={() => cartLink.current && cartLink.current.blur()}
                >
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