/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import type { RootState } from '../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentProduct } from '../app/slices/productsSlice';
import { addProductToCart } from '../app/slices/cartSlice';
import SliderComp from './Slider';
import TextInput from './TextInput';
import ButtonComp from './Button';
import SelectComp from './Select';

interface Options {
    label: string,
    value: string,
    price: number
}
export default function TopComponent() {
    const dispatch = useDispatch();
    const { currentProduct, products } = useSelector((state: RootState) => state.products);
    const [amount, setAmount] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);

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
        dispatch(setCurrentProduct(product));
    }

    const onAmountSliderChange = (amount: number) => {
        setAmount(amount)
    }

    const onAmountTextChange = (amount: number) => {
        setAmount(amount)
    }

    const addToCart = () => {
        if(currentProduct){
            dispatch(addProductToCart({...currentProduct, amount: amount}))
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
        <div className='flex flex-row border-2 mx-96 my-5 p-12'>
            <SelectComp options={optionsList2} onSelectAction={onItemSelect} label="Select product" extraClasses='p-3' />
            <SliderComp value={amount} onChangeAction={onAmountSliderChange} label='Amount' extraClasses='w-24 ml-10 mr-5' />
            <TextInput value={`${amount}`} inputType="number" onChangeAction={onAmountTextChange} extraClasses='w-12 h-12 mt-2 mr-5 p-1' />
            <div className='flex flex-row mr-12 mt-5'>
                <small className='mr-4'>X</small>
                <p>{total}</p>
            </div>
            <ButtonComp onClickAction={addToCart} label='Add to cart' type="default" extraClasses='h-12 w-fit mt-3' />
        </div>
    )
}