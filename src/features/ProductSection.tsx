/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import type { RootState } from '../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentProduct } from '../redux/slices/productsSlice';
import { addProductToCart } from '../redux/slices/cartSlice';
import SliderComp from '../components/Slider';
import TextInput from '../components/TextInput';
import ButtonComp from '../components/Button';
import SelectComp from '../components/Select';
import CardComp from "../components/Card";
import { Grid } from '@mui/material';

interface Options {
    label: string,
    value: string,
    price: number
}
export default function ProductSection() {
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
        setTimeout(() => {
            updateValues();
        }, 500)

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
        if ((cart.products.length + amount) > 10) {
            alert('You can only add a maximum of 10 items to the cart')
            return;
        }
        if (currentProduct && amount > 0 && amount <= currentProduct.maxAmount) {
            dispatch(addProductToCart({ ...currentProduct, amount: amount }))
        }
    }

    const productList: Options[] = products.map((product) => {
        return {
            value: product.id,
            label: product.productName,
            price: product.price
        }
    })
    return (
        <CardComp>
            <div>
                <Grid direction="column"
                    alignItems="center"
                    justifyContent="center"
                    spacing={3} container sx={{ flexDirection: { xs: "column", md: "row" } }}>
                    <Grid item xs={8} sm={8} lg={4}>
                        <SelectComp options={productList} onSelectAction={onItemSelect} label="Select product" />
                    </Grid>
                    <Grid item xs={8} sm={8} lg={4}>
                        <div className='flex flex-row'>
                            <SliderComp value={amount} onChangeAction={onAmountChange} label='Amount' extraClasses='w-24 ml-10 mr-5' />
                            <TextInput value={`${amount}`} inputType="number" onChangeAction={onAmountChange} extraClasses='w-12 h-12 mt-2 mr-5 p-1' />
                            <div className='flex flex-row mr-12 mt-5'>
                                <small className='mr-2'>X</small>
                                <p>{total}</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={8} lg={4}>
                        <ButtonComp onClickAction={addToCart} label='Add to cart' type="default" extraClasses='h-12 mt-3 lg:w-48 xs:w-62' />
                    </Grid>
                </Grid>

            </div>
            {
                warning.length > 0 && <p className='text-center mt-12 text-red-600'>{warning}</p>
            }
        </CardComp>
    )
}