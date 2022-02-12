import { SET_ALERT, REMOVE_ALERT } from './types'
import { v4 as uuid } from 'uuid'

export const addAlert = (alert) => {
    alert.id = uuid()

    return {
        type: SET_ALERT,
        payload: alert,
    }
}

export const removeAlert = (alertId) => {
    return {
        type: REMOVE_ALERT,
        payload: alertId,
    }
}
