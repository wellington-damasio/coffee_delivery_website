import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"
import { HeroContainer, HeroContent, BenefitsContainer, BenefitContainer, BackgroundContainer } from './styles'

import coffeeImg from '../../../../assets/images/hero-coffee.svg'

export const Hero = () => {
    return (
        <BackgroundContainer>
            <HeroContainer>
                <HeroContent>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>
                        Com o Coffee Delivery você recebe seu café onde estiver,
                        aqualquer hora
                    </p>

                    <BenefitsContainer>
                        <BenefitContainer>
                            <span className="icon icon-1">
                                <ShoppingCart weight='fill' color='#fafafa' />
                            </span>
                            Compra simples e segura
                        </BenefitContainer>
                        <BenefitContainer >
                            <span className="icon icon-2">
                                <Timer weight='fill' color='#fafafa' />
                            </span>
                            Entrega rápida e rastreada
                        </BenefitContainer>
                        <BenefitContainer>
                            <span className="icon icon-3">
                                <Package weight='fill' color='#fafafa' />
                            </span>
                            Embalagem mantém o café intacto
                        </BenefitContainer>
                        <BenefitContainer>
                            <span className="icon icon-4">
                                <Coffee weight='fill' color='#fafafa' />
                            </span>
                            O café fresquinho até você
                        </BenefitContainer>
                    </BenefitsContainer>
                </HeroContent>

                <img src={coffeeImg} alt="" />
            </HeroContainer>
        </BackgroundContainer>
    )
}