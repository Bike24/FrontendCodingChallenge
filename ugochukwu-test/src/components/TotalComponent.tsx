/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import ButtonComp from './Button';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../app/slices/cartSlice';
import type { RootState } from '../app/store';
import CompletionBar from "./CompletionBar";
import CardComp from "./Card";

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
        let percentCompletion = (numberOfProducts / 10) * 100;
        if(percentCompletion > 100) {
            percentCompletion = 100;
        }
        setCompletion(percentCompletion);
    }

    const clearCartFunction = () => {
        dispatch(clearCart());
    }

    useEffect(() => {
        performCalculations();
    }, [products])

    return (
        <CardComp>
            <p className="text-right">${total.toFixed(2)}</p>
            <div className="flex flex-row">
                <ButtonComp onClickAction={clearCartFunction} label='Clear cart' type="default" extraClasses='h-12 w-fit mt-3' />
                <div className="flex flex-row w-full">
                    <div className="w-48 m-5 ml-auto">
                        <CompletionBar completed={completion} />
                    </div>
                    <ButtonComp onClickAction={clearCartFunction} label='Buy' type="primary" extraClasses='h-12 w-24 mt-3' />
                </div>
            </div>
        </CardComp>
    )
}