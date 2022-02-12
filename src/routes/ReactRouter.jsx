import { Routes, Route } from 'react-router-dom'
import { routes } from './routes'

const ReactRouter = () => {
    return (
        <Routes>
            {Object.keys(routes).map((route) => (
                <Route
                    path={routes[route].path}
                    element={routes[route].getPage()}
                />
            ))}
        </Routes>
    )
}

export default ReactRouter
