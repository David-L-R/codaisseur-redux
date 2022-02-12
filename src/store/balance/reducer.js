import { DEPOSIT, WITHDRAW, LOADING } from './types'

const initialState = {
    loading: false,
    amount: 0,
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case WITHDRAW: {
            return {
                ...state,
                loading: false,
                amount: state.amount - action.payload,
            }
        }
        case DEPOSIT: {
            return {
                ...state,
                loading: false,
                amount: state.amount + action.payload,
            }
        }
        default: {
            return state
        }
    }
}
