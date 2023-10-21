import React, { useState } from 'react'

import FilterStore from "./filter-store";
import ProductStore from "./product-store";
import SideBar from "./sidebar";

import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


import data from "./../../data.json"

function ShopPage() {

    const [item, setItem] = useState(data.products);
    const [sort, setSort] = useState("asc");
    const [brand, setBrand] = useState("all");
    const [cardItems, setCardItems] = useState([])


    const sortProducts = (e) => {
        setSort(e.target.value);
        if (sort === "asc") {
            setItem(data.products.sort(((a, b) => (a.id < b.id ? 1 : -1))))
        }
        else if (sort === "dsc") {
            setItem(data.products.sort(((a, b) => (a.id > b.id ? 1 : -1))))
        }
    }

    const filterProducts = (e) => {
        const Result = e.target.value
        if (Result === "all") {
            setBrand(Result);
            setItem(data.products);
        } else {
            setBrand(Result);
            setItem(data.products.filter(product => product.availableBrand.indexOf(Result) >= 0));
        }
    }

    const addProducts = (product) => {
        const exist = cardItems.find(el => el.id === product.id)

        toast.success("محصول به سبد خرید اضافه شد:)")
        if (exist) {
            setCardItems(
                cardItems.map(el => el.id === product.id ? { ...exist, qty: exist.qty + 1 } : el)
            )
        } else {
            setCardItems([...cardItems, { ...product }])
        }

    }

    const removeProducts = (product) => {
        const exist = cardItems.find(el => el.id === product.id)

        toast.warning("محصول از سبد خرید حذف شد:(")
        if (exist.qty === 1) {
            setCardItems(cardItems.filter(el => el.id !== product.id));
        } else {
            setCardItems(
                cardItems.map(el => el.id === product.id ? { ...exist, qty: exist.qty - 1 } : el)
            )
        }
    }

    return (
        <div className="container font-vazir flex flex-col">
            <ToastContainer
            toastClassName="font-vazir"
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={true}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <header className='w-full'>
                <p className='text-xl font-bold text-white bg-fuchsia-950 px-14 py-5'>فروشگاه ایران نوین</p>
            </header>
            <main>
                <div className="content lg:flex lg:justify-between py-12">
                    <div className="main lg:w-2/3">
                        <FilterStore
                            length={item.length}
                            brand={brand}
                            sortProducts={sortProducts}
                            filterProducts={filterProducts}
                        />
                        <ProductStore
                            item={item}
                            cardItems={cardItems}
                            addProducts={addProducts}
                        />
                    </div>
                    <div className="sidebar lg:w-1/3 h-full mx-5 space-y-10">
                        <SideBar
                            cardItems={cardItems}
                            removeProducts={removeProducts}
                        />
                    </div>
                </div>
            </main>
            <footer className=" font-bold text-2xl w-full text-white text-center bg-fuchsia-950 py-8 bottom-0">
                طراحی و توسعه توسط شرکت ایران نوین
            </footer>
        </div>
    )
}

export default ShopPage;