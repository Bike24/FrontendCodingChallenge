import React from 'react';
import { Product } from '../app/slices/productsSlice';

interface Props {
    options: Product[],
    label: string,
    onSelectAction: () => void;
    extraClasses?: string;
    containerClass?: string;
}

export default function DropDown(props: Props) {
    const { options, onSelectAction, label, extraClasses, containerClass } = props;
    return (
        <div className={`flex flex-col ${containerClass}`}>
            <label>{label}</label>
            <select className={`border-2 rounded-md p-3 outline-none ${extraClasses}`} name='products' onChange={onSelectAction}>
                {
                    options.map(({ id, productName }) => (
                        <option value={id}>{productName}</option>
                    ))
                }
            </select>
        </div>
    )
}