import "./Card.css"

type Props = {}

const Card = (props: Props) => {
  return (
    <div className='card'>
        <img src="https://www.shutterstock.com/image-vector/transformers-symbol-sign-action-logo-260nw-2311372435.jpg"/>
        <div className='details'>
            <h2>AAPL</h2>
            <p>$110</p>
        </div>
        <p className='info'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, quis.
        </p>
    </div>   
  )
}

export default Card