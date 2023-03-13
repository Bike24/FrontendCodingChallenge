import React from 'react';

type Props = {
    children?: React.ReactNode,
};

const CardComp: React.FC<Props> = ({ children }) => {
    return (
        <div className='mx-auto lg:mx-48 border-2 my-5 p-10 xs:px-4 xs:py-10'>
            {children}
        </div>
    )
}

export default CardComp;