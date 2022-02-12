import Navbar from '../navbar/Navbar'
import Alert from '../alert/Alert'
import { routes } from '../../routes'
import './page.css'
import { useSelector } from 'react-redux'
import { selectAlerts } from '../../store/alert/selectors'
import { AlertContainer } from '..'

const Page = ({ children }) => {
    const alerts = useSelector(selectAlerts)

    return (
        <div className="page-container">
            <Navbar routes={routes} />
            <div className="content-container">{children}</div>
            <AlertContainer>
                {alerts.map((alert) => (
                    <Alert key={alert.id} type={alert.type} id={alert.id}>
                        {alert.message}
                    </Alert>
                ))}
            </AlertContainer>
        </div>
    )
}

export default Page
