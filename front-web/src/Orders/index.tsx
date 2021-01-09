import './styles.css';
import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import { useEffect, useState } from 'react';
import { OrderLocationdata, Product } from './types';
import { fecthProducts } from '../api';
import OrderLocation from './OrderLocation';
import { SelectorMatcherOptions } from '@testing-library/react';


function Orders() {

    const [products, setProducts] = useState<Product[]>([]);
    const [orderlocation, setOrderlocation] = useState<OrderLocationdata>();
    useEffect(() => {
            fecthProducts()
                .then(response => setProducts(response.data))
                .catch(error => console.log(error))
    }, []);

    return(
        <div className="orders-container">
            <StepsHeader />
            <ProductsList products={products}/>
            <OrderLocation onChangeLocation={location => setOrderlocation(location)}/>
        </div>
)

}

export default Orders;