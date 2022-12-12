import { CoffeeCard } from "./components/CoffeeCard"
import { CoffeeCardsContainer } from "./components/CoffeeCardsContainer"
import { Hero } from "./components/Hero"
import coffees from '../../../api/coffees'

export const Home = () => {

    return (
        <main>
            <Hero />
            <CoffeeCardsContainer>
                {
                    coffees.map(coffeeData => {
                        const {
                            id, coffee_img_url, type, tags,
                            description, price, qtd
                        } = coffeeData

                        return <CoffeeCard
                            key={id}
                            id={id}
                            imgUrl={coffee_img_url}
                            type={type}
                            tags={tags}
                            description={description}
                            price={price}
                            availableQtd={qtd}
                        />
                    })
                }
            </CoffeeCardsContainer>
        </main>
    )
}