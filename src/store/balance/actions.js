import { DEPOSIT } from './types'

export const deposit = (amount) => {
    console.log('deposit action amount', amount)

    return {
        type: DEPOSIT,
        payload: amount,
    }
}
