import React from 'react';
import numberWithCommas from './util';

function ProductStore({ item, cardItems, addProducts }) {

    return (
        <>
            <div className='products mt-8 p-5'>
                <ul className="grid md:grid-cols-3 gap-2 content-center">
                    {
                        item.map((item) =>
                            <li key={item.id} className='bg-white shadow-lg p-5'>
                                <div className='product'>
                                    <div className="border-b border-b-gray-200 pb-5">
                                        <img alt='mobile1' className="w-full h-48" src={item.image} />
                                        <p className='text-xl text-gray-700 pt-5 pb-3'>{item.title}
                                        </p>
                                    </div>
                                    <div className='product-prices flex justify-between mt-5'>
                                        <button className='btn-primary' onClick={() => addProducts(item)}>افزودن به سبد خرید</button>
                                        <div className='text-xl product-price font-light self-center'>{numberWithCommas(item.price)}</div>
                                    </div>
                                </div>
                            </li>
                        )
                    }
                </ul>
            </div>
        </>
    )
}

export default ProductStore;