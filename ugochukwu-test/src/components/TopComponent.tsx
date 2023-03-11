import React, { useState, useEffect } from 'react';
import DropDown from './DropDown';
import type { RootState } from '../app/store';
import { useSelector, useDispatch } from 'react-redux';
import SliderComp from './Slider';
import TextInput from './TextInput';
import ButtonComp from './Button';

export default function TopComponent() {
    const products = useSelector((state: RootState) => state.products.products)
    const [loading, toggleLoading] = useState<boolean>(false);

    const onItemSelect = () => {

    }

    const onAmountSliderChange = () => {

    }

    const onAmountTextChange = () => {

    }

    const addToCart = () => {

    }

    if (loading) {
        return (
            <div>
                <h2>Loading</h2>
            </div>
        )
    }
    return (
        <div className='flex flex-row justify-evenly'>
            <DropDown options={products} onSelectAction={onItemSelect} label="Products" />
            <SliderComp onChangeAction={onAmountSliderChange} label='Amount' />
            <TextInput onChangeAction={onAmountTextChange} placeholder='' />
            <ButtonComp onClickAction={addToCart} label='Add to cart' type="default" />
        </div>
    )
}