/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import ButtonComp from './Button';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../app/slices/cartSlice';
import type { RootState } from '../app/store';

export default function TotalComponent() {
    const dispatch = useDispatch();
    const { products } = useSelector((state: RootState) => state.cart);
    const [total, setTotal] = useState<number>(0);

    function calculateTotal(){
        let amount = 0;
        for(let i = 0; i < products.length; i++) {
            const product = products[i];
            amount = amount + (product.amount * product.price);
        }
        setTotal(amount);
    }
    
    const clearCartFunction = () => {
        dispatch(clearCart());
    }

    useEffect(() => {
        calculateTotal();
    }, [products])

    return (
        <div className='border-2 mx-96 my-5 p-12 pb-5'>
            <p className="text-right">{total}</p>
            <div className="flex flex-row justify-between">
                <ButtonComp onClickAction={clearCartFunction} label='Clear cart' type="default" extraClasses='h-12 w-fit mt-3' />
                <ButtonComp onClickAction={clearCartFunction} label='Buy' type="primary" extraClasses='h-12 w-24 mt-3' />
            </div>
        </div>
    )
}