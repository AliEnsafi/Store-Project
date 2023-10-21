import React from 'react'

function FilterStore({ length, brand, sortProducts, filterProducts }) {
    return (
        <div>
            <div className='filter flex justify-between text-2xl'>
                <div className='filter-result self-center'>
                    تعداد محصولات : {length}
                </div>
                <div className='filter-sort invisible lg:visible'>
                    <div className='filter-ordering text-center pb-3'>مرتب سازی بر اساس</div>
                    <div className='form-checkbox flex'>
                        <div className='form-group px-2'>
                            <label>جدیدترین محصولات</label>
                            <input type='radio' value="asc" name='radiovalues' onChange={sortProducts} />
                        </div>
                        <div className='form-group px-2'>
                            <label>قدیمی ترین محصولات</label>
                            <input type='radio' value="dsc" name='radiovalues' onChange={sortProducts} />
                        </div>
                    </div>
                </div>
                <div className='filter-brands self-center'>
                    <label className='px-2'>برندها</label>
                    <select value={brand} onChange={filterProducts} className="border border-gray-300 w-48 cursor-pointer outline-none">
                        <option value="all">همه</option>
                        <option value="samsung">سامسونگ</option>
                        <option value="howawei">هواوی</option>
                        <option value="iphone">آیفون</option>
                        <option value="xiaomi">شیائومی</option>
                        <option value="sony">سونی</option>
                        <option value="lg">ال جی</option>
                        <option value="blackberry">بلک بری</option>
                        <option value="motorola">موتورولا</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default FilterStore;