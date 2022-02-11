import Navbar from '../navbar/Navbar'
import {routes} from '../../routes'
import './page.css'

const Page = ({children}) => {
    return (
        <div className="page-container">
            <Navbar routes={routes} />
            <div className="content-container">
                {children}
            </div>
        </div>      
    )
}

export default Page