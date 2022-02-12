import './card.css'

const Card = ({ children, width }) => (
    <div className="card" style={{ width: width || '250px' }}>
        {children}
    </div>
)

export default Card
