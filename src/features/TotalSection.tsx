/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import ButtonComp from '../components/Button';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../redux/slices/cartSlice';
import { toggleshowConfirmStatus, setMessage } from '../redux/slices/generalSlice';
import type { RootState } from '../redux/store';
import CompletionBar from "../components/CompletionBar";
import CardComp from "../components/Card";

export default function TotalSection() {
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
        let percentCompletion = (products.length / 10) * 100;
        if (percentCompletion > 100) {
            percentCompletion = 100;
        }
        setCompletion(percentCompletion);
    }

    const clearCartFunction = () => {
        dispatch(clearCart());
    }

    const showMessage = (text: string) => {
        dispatch(setMessage(text));
        dispatch(toggleshowConfirmStatus(true));
    }

    const peformPurchace = () => {
        if(products.length > 0) {
            showMessage('Items purchase successful');
        } else {
            showMessage('No item(s) in the cart yet');
        }
    }

    useEffect(() => {
        performCalculations();
    }, [products])

    return (
        <CardComp>
            <div className="flex lg:flex-row xs:flex-col lg:justify-between xs:text-center">
                <ButtonComp onClickAction={clearCartFunction} label='Clear cart' type="default" extraClasses='h-12 lg:mt-20 lg:w-48 xs:w-66' />
                <div className="flex-col xs:mt-12">
                    <p className="lg:text-right">${total.toFixed(2)}</p>
                    <div className="flex lg:flex-row xs:flex-col">
                        <div className="flex lg:flex-row xs:flex-col w-full">
                            <div className="lg:w-48 lg:m-5 lg:ml-auto">
                                <CompletionBar completed={completion} />
                            </div>
                            <ButtonComp onClickAction={peformPurchace} label='Buy' type="primary" extraClasses='h-12 lg:w-24 xs:w-66 mt-3' />
                        </div>
                    </div>
                </div>
            </div>
        </CardComp>
    )
}