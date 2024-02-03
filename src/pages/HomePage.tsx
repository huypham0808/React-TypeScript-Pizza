import { useState } from "react";
import PizzaCard from "../sections/PizzaCard";
import { Pizza } from "../models/pizza.model";

const HomePage = () => {
    const [pizzas, setPizzas] = useState<Pizza[]>([
        { id: 1, title: 'Pizza Thi Bam', description: 'Thit bam, sot ca chua' },
        { id: 2, title: 'Pizza Pho Mai', description: 'Pho mai, muoi' },
        { id: 3, title: 'Pizza Hai San', description: 'Tom, cua' },
    ])
    return (
        <div className="container">
            <div className="row d-flex justify-content-center bodyContent">
                {
                    pizzas.map(item => <PizzaCard id={item.id} title={item.title} description={item.description} />)
                }
            </div>
        </div>
    )
};
export default HomePage;