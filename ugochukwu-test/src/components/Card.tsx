import React from 'react';

type Props = {
    children?: React.ReactNode,
};

const CardComp: React.FC<Props> = ({ children }) => {
    return (
        <div className='border-2 my-5 p-10 lg:mx-48'>
            {children}
        </div>
    )
}

export default CardComp;