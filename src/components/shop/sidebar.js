import React from 'react'
import numberWithCommas from './util';

function SideBar({ cardItems, removeProducts }) {

    const itemPrice = cardItems.reduce((a, c) => a + c.price * c.qty, 0);
    const totalPrice = itemPrice;



    return (
        <>
            {
                cardItems.length === 0
                    ? <div className='aside-empty text-orange-700 text-xl text-center bg-gray-200 py-5'>سبد خرید خالی است</div>
                    : <div className='aside-show text-red-700 text-2xl text-center bg-green-200 py-10'>شما {cardItems.length} محصول در سبد خرید خود دارید.</div>
            }
            <div className='aside-items mt-8'>
                {
                    cardItems.map((item) =>
                        <div className="aside-item flex justify-between items-center pb-4 border-b border-b-gray-400" key={item.id}>
                            <div className="aside-detail flex">
                                <img src={item.image} alt='mobile-img' className='aside-img w-24 h-24 object-cover' />
                                <p className='aside-title mr-3 self-center text-lg font-bold' >{item.title}</p>
                            </div>
                            <div className="aside-price">
                                <div className="aside-price-details flex items-center">
                                    <span>{numberWithCommas(item.price)}</span>
                                    <span className="qty flex justify-center items-center text-sm text-white bg-green-900 rounded-full w-12 h-12 mr-3">{item.qty} خرید</span>
                                </div>
                                <div className="aside-remove mt-4">
                                    <button className='btn-secondery' onClick={() => removeProducts(item)}>حذف از سبد</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div >
            <div className='aside-total flex justify-center items-center text-xl bg-slate-200 p-12'>
                <div className='aside-total-text'>مجموع قیمت:</div>
                <div className='aside-total-price'>{numberWithCommas(totalPrice)} تومان</div>
            </div>
        </>
    )
}

export default SideBar;