import { DEPOSIT, WITHDRAW } from './types'

export const withdraw = (amount) => {
    return {
        type: WITHDRAW,
        payload: amount,
    }
}

export const deposit = (amount) => {
    return {
        type: DEPOSIT,
        payload: amount,
    }
}
