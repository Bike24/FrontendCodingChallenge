import React, { useState, useEffect } from 'react';
import DropDown from './DropDown';
import type { RootState } from '../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentProduct } from '../app/slices/productsSlice';
import SliderComp from './Slider';
import TextInput from './TextInput';
import ButtonComp from './Button';

export default function TopComponent() {
    const dispatch = useDispatch();
    const { currentProduct, products } = useSelector((state: RootState) => state.products);
    const [amount, setAmount] = useState<string>('0');
    const [total, setTotal] = useState<number>(0);

    function updateValues() {
        const price = currentProduct?.price || 0;
        const calculatedTotal = price * parseInt(amount);
        setTotal(parseFloat(calculatedTotal.toFixed(2)));
    }

    useEffect(() => {
        updateValues();
    }, [currentProduct, amount])

    const onItemSelect = (product: string) => {
        dispatch(setCurrentProduct(product));
    }

    const onAmountSliderChange = (amount: string) => {
        setAmount(amount)
    }

    const onAmountTextChange = (amount: string) => {
        setAmount(amount)
    }

    const addToCart = () => {

    }
    return (
        <div className='flex flex-row border-2 m-24 p-12'>
            <DropDown options={products} onSelectAction={onItemSelect} label="Products" extraClasses='p-3' />
            <SliderComp onChangeAction={onAmountSliderChange} label='Amount' extraClasses='w-24 ml-10 mr-5 mt-3' />
            <TextInput value={amount} inputType="number" onChangeAction={onAmountTextChange} extraClasses='w-12 h-12 mt-5 mr-5 p-1' />
            <div className='flex flex-row mr-12 mt-8'>
                <small className='mr-4'>X</small>
                <p>{total}</p>
            </div>
            <ButtonComp onClickAction={addToCart} label='Add to cart' type="default" extraClasses='px-12 py-1' />
        </div>
    )
}