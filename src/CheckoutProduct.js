import React from 'react';
import './CheckoutProduct.css';
import GradeIcon from '@mui/icons-material/Grade';
import { useStateValue } from "./StateProvider";

function CheckoutProduct({id, image, title, price, rating}) {
    const [{ basket }, dispatch] = useStateValue();

    //To remove items from the basket
    const removeFromBasket = () =>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })

    }
    return (
        <div className="checkoutProduct cont">
            <img className='checkoutProduct__image img-cont' src={image} alt='' 
            />
            <div className='checkoutProduct__info info-cont '>
                <p className='checkoutProduct__title'>{title} 
                </p>

                <p className='checkoutProduct__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutProduct__rating'>
                    {Array(rating)
                    .fill()
                    .map((_,i) =>(
                        <p> <GradeIcon/></p>
                    ))
                    }

                </div>
                    <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
            
        </div>
    );
};

export default CheckoutProduct;

