import { DEPOSIT } from './types'

export const deposit = (amount) => ({
    type: DEPOSIT,
    payload: amount,
})
