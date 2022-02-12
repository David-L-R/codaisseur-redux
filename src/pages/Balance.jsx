import React, { useState } from 'react'
import { Page } from '../components'

const Balance = () => {
    const [balance, setBalance] = useState(0)
    return (
        <Page>
            <p>Balance: {balance}$</p>
            <button
                onClick={() => {
                    setBalance(balance + 10)
                }}
            >
                Deposit 10$
            </button>
        </Page>
    )
}

export default Balance
