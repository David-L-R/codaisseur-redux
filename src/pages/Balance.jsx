import React, { useState } from 'react'

//  REDUX
import { useDispatch, useSelector } from 'react-redux'
import { deposit, withdraw } from '../store/balance/actions'
import { selectBalance } from '../store/balance/selectors'
import { addAlert } from '../store/alert/actions'

//  COMPONENTS
import { Page } from '../components'
import Card from '../components/card/Card'

//  STYLES
import './style/balance.css'

const Balance = () => {
    const dispatch = useDispatch()
    const balance = useSelector(selectBalance)

    const [amount, setAmount] = useState(0)

    const handleInput = (e) => {
        console.log(e.target.value)

        const value = Number(e.target.value)

        setAmount(value > 0 ? value : 0)
    }

    const handleWithdraw = () => {
        if (balance < amount) {
            return
        }
        dispatch(withdraw(amount))
    }

    const createRandomAlert = () => {
        const index = Math.floor(Math.random(4))

        const types = ['danger', 'warning', 'success', 'info']

        const messages = ['error!', 'warning!', 'great!', 'some info']

        dispatch(
            addAlert({
                type: types[index],
                message: messages[index],
            })
        )
    }

    return (
        <Page>
            <Card>
                <p>Balance: {balance}$</p>
                <form className="form">
                    <input type="number" onChange={handleInput} />
                    <button type="button" onClick={handleWithdraw}>
                        Withdraw
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            dispatch(deposit(amount))
                        }}
                    >
                        Deposit
                    </button>
                    <button type="button" onClick={createRandomAlert}>
                        ADD ALERT
                    </button>
                </form>
            </Card>
        </Page>
    )
}

export default Balance
