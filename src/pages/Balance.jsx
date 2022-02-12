import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Page } from '../components'
import Card from '../components/card/Card'
import { deposit } from '../store/balance/actions'
import './style/balance.css'

const Balance = () => {
    const dispatch = useDispatch()
    const [balance, setBalance] = useState(0)
    const [amount, setAmount] = useState(0)

    const handleInput = (e) => {
        console.log(e.target.value)

        const value = Number(e.target.value)

        setAmount(value > 0 ? value : 0)
    }

    return (
        <Page>
            <Card>
                <p>Balance: {balance}$</p>
                <form className="form">
                    <input type="number" onChange={handleInput} />
                    <button
                        type="button"
                        onClick={() => {
                            console.log('dispatch')
                            dispatch(deposit(amount))
                        }}
                    >
                        Deposit
                    </button>
                </form>
            </Card>
        </Page>
    )
}

export default Balance
