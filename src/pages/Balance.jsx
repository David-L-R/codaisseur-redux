import React, { useState } from 'react'

//  REDUX
import { useDispatch, useSelector } from 'react-redux'
import { deposit, withdraw } from '../store/balance/actions'
import { selectBalance } from '../store/balance/selectors'
import { addAlert } from '../store/alert/actions'

//  COMPONENTS
import { Alert, Page } from '../components'
import Card from '../components/card/Card'

//  STYLES
import './style/balance.css'

const Balance = () => {
    const dispatch = useDispatch()
    const balance = useSelector(selectBalance)
    const [alert, setAlert] = useState('')
    const [amount, setAmount] = useState(0)

    const handleInput = (e) => {
        setAmount(Number(e.target.value))
    }

    const handleWithdraw = () => {
        if (balance < amount) {
            setAlert('Cannot withdraw an amount larger than the balance')
        } else if (amount < 0) {
            setAlert('Cannot withdraw a negative amount')
        } else {
            setAlert('')
            dispatch(withdraw(amount))
        }
    }

    const handleDeposit = () => {
        if (amount < 0) {
            setAlert('Cannot deposit a negative number')
        } else {
            dispatch(deposit(amount))
            setAlert('')
        }
    }

    const createRandomAlert = () => {
        const index = Math.floor(Math.random() * 4)
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
                    {alert && <p className="alert-text">{alert}</p>}
                    <button type="button" onClick={handleWithdraw}>
                        Withdraw
                    </button>
                    <button type="button" onClick={handleDeposit}>
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
