import TableComp from './Table';
import type { RootState } from '../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart } from '../app/slices/cartSlice';

export default function CartComp() {
    const dispatch = useDispatch();
    const { products } = useSelector((state: RootState) => state.cart);
    const removeItem = (id: string) => {
        dispatch(removeItemFromCart(id));
    }
    return (
        <div className='flex flex-row border-2 mx-96 my-5 p-12'>
            <TableComp onRemoveItem={removeItem} columns={['Product name', 'Unit price', 'Amount', 'Price', 'Action']} data={products} />
        </div>
    )
}