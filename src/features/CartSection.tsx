import TableComp from '../components/Table';
import type { RootState } from '../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart } from '../redux/slices/cartSlice';
import CardComp from '../components/Card';

export default function CartSection() {
    const dispatch = useDispatch();
    const { products } = useSelector((state: RootState) => state.cart);
    const removeItem = (id: string) => {
        dispatch(removeItemFromCart(id));
    }
    return (
        <CardComp>
            <TableComp onRemoveItem={removeItem} columns={['Product name', 'Unit price', 'Amount', 'Price', 'Action']} data={products} />
            <div className='overflow-y-auto w-1/3 max-h-48'>
                {
                    products.length >= 10 &&
                    <p className='text-red-600'>Cannot have more than 10 products in the cart</p>
                }
            </div>
        </CardComp>
    )
}