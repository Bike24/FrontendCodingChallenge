import TableComp from './Table';
import type { RootState } from '../app/store';
import { useSelector } from 'react-redux';

export default function CartComp() {
    const { products } = useSelector((state: RootState) => state.cart);
    return (
        <div className='flex flex-row border-2 mx-96 my-5 p-12'>
            <TableComp columns={['Product name', 'Unit price', 'Amount', 'Price']} data={products} />
        </div>
    )
}