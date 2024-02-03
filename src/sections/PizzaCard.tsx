import logoPizza from '../assets/pizza.png';
import { Pizza } from '../models/pizza.model';
type Props = Pizza;
const PizzaCard = ({
    title,
    description
}: Props) => {
    return (
        <div className="col-xl-3 col-lg-2 col-md-2 col-sm my-5">
            <div className="card w-100 card-items">
                <img className="img-fluid card-img-top" src={logoPizza} alt='pizza' />
                <div className="card-body card-content">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    )
};
export default PizzaCard;