import { useEffect } from 'react'
import states from '../../../../../api/states'
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react"
import {
    FormContainer,
    InformationContainer,
    TextInput,
    InputsContainer,
    PaymentMethods
} from "./styles"
import { UseFormRegister, UseFormSetError, UseWatchProps } from 'react-hook-form'
import { UserDataTypes } from '../../../../contexts/OrdersContext'


interface PropsTypes {
    registerInput: UseFormRegister<UserDataTypes>
    errors: any
    watch: any
    setValue: any
}

export const OrderForm = (props: PropsTypes) => {
    const { registerInput, watch, setValue } = props

    const formatStateName = (stateName: string) => {
        return stateName.split(' ').join('-').toLowerCase()
    }

    const changeSelectedRadioButton = (event: any) => {
        const paymentMethodButtons = event.target.parentNode.parentNode.children

        Array.from(paymentMethodButtons).forEach((button: any) => {
            const radioInput = button.children[0]

            if (radioInput.checked) {
                button.classList.add('focus')
            } else {
                button.classList.remove('focus')
            }
        })
    }

    const cepInputValue = watch('cep')

    useEffect(() => {
        if (cepInputValue && cepInputValue.length === 8) {
            const cepApiUrl = `https://viacep.com.br/ws/${cepInputValue}/json/`
            const findStateName = (initials: string) => {
                const state = states.find(state => state.initials === initials)
                const optionValueStateName = state?.name.toLocaleLowerCase()
                    .split(' ')
                    .join('-')

                return state ? optionValueStateName : ''
            }
            fetch(cepApiUrl)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setValue('street', data.logradouro)
                    setValue('neighbourhood', data.bairro)
                    setValue('city', data.localidade)
                    setValue('state', findStateName(data.uf))
                })
                .catch(err => console.log(err))
        }
    }, [cepInputValue])

    return (
        <FormContainer>
            <h2>Complete seu pedido</h2>
            <div className="first-half">
                <InformationContainer iconColor='yellow'>
                    <span className="icon">
                        <MapPinLine size={22} />
                    </span>
                    <div>
                        <h3>Endereço de entrega</h3>
                        <p>Informe o endereço onde deseja receber seu pedido</p>
                    </div>
                </InformationContainer>
                <InputsContainer>
                    <TextInput
                        {...registerInput('cep', {
                            required: true,
                            maxLength: 8,
                            minLength: 8
                        })}
                        placeholder='CEP (Somente números)'
                        id='cep'
                    />
                    <TextInput
                        {...registerInput('street', { required: true })}
                        placeholder='Rua'
                        id='street'
                    />
                    <TextInput
                        {...registerInput('houseNumber', { required: true })}
                        type="number"
                        placeholder='Número'
                        id='house-number'
                    />
                    <TextInput
                        {...registerInput('neighbourhood', { required: true })}
                        placeholder='Bairro'
                        id='neighbourhood'
                    />
                    <TextInput
                        {...registerInput('city', { required: true })}
                        placeholder='Cidade'
                        id='city'
                    />
                    <select
                        {...registerInput('state', { required: true })}
                        placeholder='UF'
                        id='state'
                    >
                        {
                            states.map(state => {
                                return (
                                    <option
                                        value={formatStateName(state.name)}
                                        key={state.initials}
                                    >
                                        {state.initials}
                                    </option>
                                )
                            })
                        }
                    </select>
                    <span className="optional-input">
                        <TextInput
                            {...registerInput('additionalInfo')}
                            placeholder='Complemento'
                            id='aditional-info'
                        />
                    </span>
                </InputsContainer>
            </div>
            <div className="second-half">
                <InformationContainer iconColor='purple'>
                    <span className="icon">
                        <CurrencyDollar size={22} />
                    </span>
                    <div>
                        <h3>Pagamento</h3>
                        <p>
                            O pagamento é feito na entrega. Escolha a forma que
                            deseja pagar.
                        </p>
                    </div>
                </InformationContainer>

                <PaymentMethods>
                    <span>
                        <input
                            {...registerInput('paymentMethod')}
                            type="radio"
                            id="credit-card"
                            value='credit-card'
                            onClick={(event) => changeSelectedRadioButton(event)}
                        />
                        <span className="icon">
                            <CreditCard />
                        </span>
                        Cartão de crédito
                    </span>
                    <span>
                        <input
                            {...registerInput('paymentMethod')}
                            type="radio"
                            id="debit-card"
                            value='debit-card'
                            required
                            onClick={(event) => changeSelectedRadioButton(event)}
                        />
                        <span className="icon">
                            <Bank />
                        </span>
                        Cartão de Débito
                    </span>
                    <span>
                        <input
                            {...registerInput('paymentMethod')}
                            type="radio"
                            id="money"
                            value='money'
                            required
                            onClick={(event) => changeSelectedRadioButton(event)}
                        />
                        <span className="icon">
                            <Money />
                        </span>
                        Dinheiro
                    </span>
                </PaymentMethods>
            </div>
        </FormContainer>
    )
}

