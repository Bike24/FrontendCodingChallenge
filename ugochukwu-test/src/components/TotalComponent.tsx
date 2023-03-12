/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import ButtonComp from './Button';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../app/slices/cartSlice';
import type { RootState } from '../app/store';
import CompletionBar from "./CompletionBar";

export default function TotalComponent() {
    const dispatch = useDispatch();
    const { products } = useSelector((state: RootState) => state.cart);
    const [total, setTotal] = useState<number>(0);
    const [completion, setCompletion] = useState<number>(0);

    function performCalculations() {
        let amount = 0;
        let numberOfProducts = 0;
        for (let i = 0; i < products.length; i++) {
            const product = products[i];
            amount = amount + (product.amount * product.price);
            numberOfProducts = numberOfProducts + product.amount;
        }
        setTotal(amount);

        //Calculate percentage completion
        const percentCompletion = (numberOfProducts / 10) * 100;
        setCompletion(percentCompletion);
    }

    const clearCartFunction = () => {
        dispatch(clearCart());
    }

    useEffect(() => {
        performCalculations();
    }, [products])

    return (
        <div className='border-2 mx-96 my-5 p-12 pb-5'>
            <p className="text-right">{total}</p>
            <div className="flex flex-row justify-between">
                <ButtonComp onClickAction={clearCartFunction} label='Clear cart' type="default" extraClasses='h-12 w-fit mt-3' />
                <div className="flex flex-row">
                    <CompletionBar completed={completion} />
                    <ButtonComp onClickAction={clearCartFunction} label='Buy' type="primary" extraClasses='h-12 w-24 mt-3' />
                </div>
            </div>
        </div>
    )
}