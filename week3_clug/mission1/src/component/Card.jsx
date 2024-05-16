import './css/Card.css'

const Card = ({ poster, title, description }) => {
    return <div className='card'>{poster}{title}</div>
}

export default Card;