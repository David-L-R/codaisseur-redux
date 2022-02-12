import { SET_ALERT, REMOVE_ALERT, LOADING } from './types'

const initialState = {
    alerts: [],
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_ALERT: {
            return {
                ...state,
                alerts: [...state.alerts, action.payload],
            }
        }
        case REMOVE_ALERT: {
            const filtered = state.alerts.filter(
                (alert) => alert.id !== action.payload
            )

            return {
                ...state,
                alerts: [...filtered],
            }
        }
        default: {
            return state
        }
    }
}
