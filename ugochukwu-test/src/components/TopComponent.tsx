/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import type { RootState } from '../app/store';
import Grid from '@mui/material/Grid';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentProduct } from '../app/slices/productsSlice';
import { addProductToCart } from '../app/slices/cartSlice';
import SliderComp from './Slider';
import TextInput from './TextInput';
import ButtonComp from './Button';
import SelectComp from './Select';
import CardComp from "./Card";

interface Options {
    label: string,
    value: string,
    price: number
}
export default function TopComponent() {
    const dispatch = useDispatch();
    const { currentProduct, products } = useSelector((state: RootState) => state.products);
    const cart = useSelector((state: RootState) => state.cart);
    const [amount, setAmount] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);
    const [warning, setWarning] = useState<string>('');

    function updateValues() {
        if (amount > 0) {
            const price = currentProduct?.price || 0;
            const calculatedTotal = price * amount;
            setTotal(parseFloat(calculatedTotal.toFixed(2)));
        }

    }

    useEffect(() => {
        updateValues();
    }, [currentProduct, amount])

    const onItemSelect = (product: string) => {
        setAmount(0);
        setTotal(0)
        dispatch(setCurrentProduct(product));
    }

    const onAmountChange = (amount: number) => {
        if (!currentProduct || Object.keys(currentProduct).length === 0) return
        if (currentProduct && amount > currentProduct?.maxAmount) {
            setWarning(`There are only ${currentProduct.maxAmount} item(s) left for this product.`);
            return;
        }
        setWarning('');
        setAmount(amount);
    }

    const addToCart = () => {
        if (cart.products.length === 10) {
            alert('You can only add a maximum of 10 items to the cart')
        }
        if (currentProduct && amount > 0 && amount <= currentProduct.maxAmount) {
            dispatch(addProductToCart({ ...currentProduct, amount: amount }))
        }
    }

    const optionsList2: Options[] = products.map((product) => {
        return {
            value: product.id,
            label: product.productName,
            price: product.price
        }
    })
    return (
        <CardComp>
            <div className='flex flex-row justify-evenly'>
                <SelectComp options={optionsList2} onSelectAction={onItemSelect} label="Select product" extraClasses='p-3' />
                <div className='flex flex-row'>
                    <SliderComp value={amount} onChangeAction={onAmountChange} label='Amount' extraClasses='w-24 ml-10 mr-5' />
                    <TextInput value={`${amount}`} inputType="number" onChangeAction={onAmountChange} extraClasses='w-12 h-12 mt-2 mr-5 p-1' />
                    <div className='flex flex-row mr-12 mt-5'>
                        <small className='mr-4'>X</small>
                        <p>{total}</p>
                    </div>
                </div>
                <ButtonComp onClickAction={addToCart} label='Add to cart' type="default" extraClasses='h-12 w-fit mt-3' />
            </div>
            {
                warning.length > 0 && <p className='text-center mt-12 text-red-600'>{warning}</p>
            }
        </CardComp>
    )
}