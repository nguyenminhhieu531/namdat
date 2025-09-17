import React from 'react';
import BoxProduct from '../BoxProduct';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function NewArrivalsProduct() {
    const newArrivals = useSelector((state) => state.productSlice.newArrivals);
    return (
        <>
            <section className="pt-16 pb-8 bg-gray" data-original-class="bg-gray">
                <div className="container">
                    <div className="justify-between items-end">
                        <div>
                            <h2 className="text-3xl font-bold text-center">BÁNH TRÁNG</h2>
                            <p className="mt-2 text-lightGray text-center">
                                Bánh tráng các loại: mè, 
                            </p>
                        </div>
                    </div>
                    <ul className="md:grid grid-cols-4 gap-10 mt-11">
                        <li className="mt-6 md:mt-0">
                            <a href="#" data-discover="true">
                                <div className="rounded-lg overflow-hidden">
                                    <img className="image" alt="" src="./assets/images/z7019556765201_54772c466ae47d59f1f1f51434b14f33.jpg" />
                                </div>
                                {/* <h3 className="mt-4 font-semibold text-center">Mens Shirts</h3> */}
                            </a>
                        </li>
                        <li className="mt-6 md:mt-0">
                            <a href="#" data-discover="true">
                                <div className="rounded-lg overflow-hidden">
                                    <img className="image" alt="" src="./assets/images/z7019556767686_74f51626bd8e1d3c1c2c1a050ae10d13.jpg" />
                                </div>
                                {/* <h3 className="mt-4 font-semibold text-center">Mens Shoes</h3> */}
                            </a>
                        </li>
                        <li className="mt-6 md:mt-0">
                            <a href="#" data-discover="true">
                                <div className="rounded-lg overflow-hidden">
                                    <img className="image" alt="" src="./assets/images/z7019556767793_060f396d7c720b195245d8eb638b4a75.jpg" />
                                </div>
                                {/* <h3 className="mt-4 font-semibold text-center">Mens Watches</h3> */}
                            </a>
                        </li>
                        <li className="mt-6 md:mt-0">
                            <a href="#" data-discover="true">
                                <div className="rounded-lg overflow-hidden">
                                    <img className="image" alt="" src="./assets/images/z7019556721279_f8f88179c183a878b143c9dae5a05a91.jpg" />
                                </div>
                                {/* <h3 className="mt-4 font-semibold text-center">Mens Watches</h3> */}
                            </a>
                        </li>
                        <li className="mt-6 md:mt-0">
                            <a href="#" data-discover="true">
                                <div className="rounded-lg overflow-hidden">
                                    <img className="image" alt="" src="./assets/images/z7019556724627_5c2ed9f1e366ada45775abb03d7e1925.jpg" />
                                </div>
                                {/* <h3 className="mt-4 font-semibold text-center">Mens Watches</h3> */}
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}

export default NewArrivalsProduct;