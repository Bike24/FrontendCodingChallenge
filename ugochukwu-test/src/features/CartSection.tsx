import TableComp from '../components/Table';
import type { RootState } from '../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart } from '../app/slices/cartSlice';
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
        </CardComp>
    )
}