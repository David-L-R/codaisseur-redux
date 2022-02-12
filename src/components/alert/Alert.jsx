import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeAlert } from '../../store/alert/actions'
import './alert.css'

const Alert = ({ children, type, id }) => {
    const dispatch = useDispatch()
    const [color, setColor] = useState()

    useEffect(() => {
        switch (type) {
            case 'success':
                setColor('var(--success-color)')
                return
            case 'warning':
                setColor('var(--warning-color)')
                return
            case 'danger':
                setColor('var(--danger-color)')
                return
            case 'info':
                setColor('var(--info-color)')
                return
            default:
                return
        }
    }, [type])

    return (
        <>
            {color && (
                <div className="alert" style={{ backgroundColor: color }}>
                    <div>{children}</div>
                    <button onClick={() => dispatch(removeAlert(id))}>
                        Remove
                    </button>
                </div>
            )}
        </>
    )
}

export default Alert
