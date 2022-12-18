import { v4 as uuidv4 } from 'uuid'
import imgExpressoTradicional from '../assets/images/coffees/expresso_tradicional.svg'
import imgExpressoAmericano from '../assets/images/coffees/expresso_americano.svg'
import imgExpressoCremoso from '../assets/images/coffees/expresso_cremoso.svg'
import imgExpressoGelado from '../assets/images/coffees/expresso_gelado.svg'
import imgCafeComLeite from '../assets/images/coffees/cafe_com_leite.svg'
import imgLatte from '../assets/images/coffees/latte.svg'
import imgCapuccino from '../assets/images/coffees/capuccino.svg'
import imgMacchiato from '../assets/images/coffees/macchiato.svg'
import imgMocaccino from '../assets/images/coffees/mocaccino.svg'
import imgChocolateQuente from '../assets/images/coffees/chocolate_quente.svg'
import imgCubano from '../assets/images/coffees/cubano.svg'
import imgHavaiano from '../assets/images/coffees/havaiano.svg'
import imgArabe from '../assets/images/coffees/arabe.svg'
import imgIrlandes from '../assets/images/coffees/irlandes.svg'

const coffees = [
    {
        id: uuidv4(),
        coffee_img_url: imgExpressoTradicional,
        type: 'Expresso Tradicional',
        tags: ['tradicional'],
        description: 'O tradicional café com água quente e grãos moídos',
        price: 9.90,
        qtd: 10
    },
    {
        id: uuidv4(),
        coffee_img_url: imgExpressoAmericano,
        type: 'Expresso Americano',
        tags: ['tradicional'],
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: 9.90,
        qtd: 13
    },
    {
        id: uuidv4(),
        coffee_img_url: imgExpressoCremoso,
        type: 'Expresso Cremoso',
        tags: ['tradicional'],
        description: 'Café expresso tradicional com espuma cremosa',
        price: 9.90,
        qtd: 8
    },
    {
        id: uuidv4(),
        coffee_img_url: imgExpressoGelado,
        type: 'Expresso Gelado',
        tags: ['tradicional', 'gelado'],
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: 9.90,
        qtd: 20
    },
    {
        id: uuidv4(),
        coffee_img_url: imgCafeComLeite,
        type: 'Café com Leite',
        tags: ['tradicional', 'com leite'],
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        price: 9.90,
        qtd: 20
    },
    {
        id: uuidv4(),
        coffee_img_url: imgLatte,
        type: 'Latte',
        tags: ['tradicional', 'com leite'],
        description: 'Uma dose de café expresso com o dobro do leite e espuma cremosa',
        price: 9.90,
        qtd: 5
    },
    {
        id: uuidv4(),
        coffee_img_url: imgCapuccino,
        type: 'Capuccino',
        tags: ['tradicional', 'com leite'],
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        price: 9.90,
        qtd: 15
    },
    {
        id: uuidv4(),
        coffee_img_url: imgMacchiato,
        type: 'Macchiato',
        tags: ['tradicional', 'com leite'],
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        price: 9.90,
        qtd: 4
    },
    {
        id: uuidv4(),
        coffee_img_url: imgMocaccino,
        type: 'Mocaccino',
        tags: ['tradicional', 'com leite'],
        description: 'Café expresso com calda de chocolate, pouco de leite e espuma',
        price: 9.90,
        qtd: 11
    },
    {
        id: uuidv4(),
        coffee_img_url: imgChocolateQuente,
        type: 'Chocolate Quente',
        tags: ['especial', 'com leite'],
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        price: 9.90,
        qtd: 10
    },
    {
        id: uuidv4(),
        coffee_img_url: imgCubano,
        type: 'Cubano',
        tags: ['especial', 'acóolico', 'gelado'],
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        price: 9.90,
        qtd: 9
    },
    {
        id: uuidv4(),
        coffee_img_url: imgHavaiano,
        type: 'Havaiano',
        tags: ['especial'],
        description: 'Bebida adocicada preparada com café e leite de coco',
        price: 9.90,
        qtd: 3
    },
    {
        id: uuidv4(),
        coffee_img_url: imgArabe,
        type: 'Árabe',
        tags: ['especial'],
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        price: 9.90,
        qtd: 5
    },
    {
        id: uuidv4(),
        coffee_img_url: imgIrlandes,
        type: 'Irlandês',
        tags: ['especial', 'acóolico'],
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        price: 9.90,
        qtd: 12
    },

]

export default coffees