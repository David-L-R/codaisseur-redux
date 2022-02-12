import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeAlert } from '../../store/alert/actions'
import './alert.css'

const Alert = ({ children, type, id }) => {
    const dispatch = useDispatch()
    const [color, setColor] = useState('var(--primary-color)')

    useEffect(() => {
        switch (type) {
            case 'success':
                setColor('--success-color')
                return
            case 'warning':
                setColor('--warning-color')
                return
            case 'danger':
                setColor('--danger-color')
                return
            default:
                setColor('--info-color')
                return
        }
    }, [type])

    return (
        <div className="alert" style={{ backgroundColor: color }}>
            <div>{children}</div>
            <button onClick={() => dispatch(removeAlert(id))}>Remove</button>
        </div>
    )
}

export default Alert
