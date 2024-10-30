import "./Card.css";

interface Props {
  companyName: string;
  ticker: string;
  price: number;
}

const Card = ({companyName,ticker,price}: Props) => {
  return (
    <div className="card">
      <img src="https://www.shutterstock.com/image-vector/transformers-symbol-sign-action-logo-260nw-2311372435.jpg" />
      <div className="details">
        <h2>{companyName} ( {ticker})</h2>
        <p>${price}</p>
      </div>
      <p className="info">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, quis.
      </p>
    </div>
  );
};

export default Card;
