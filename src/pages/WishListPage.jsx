import { Pagination } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import BoxProduct from '../components/BoxProduct';
import { useSelector } from 'react-redux';

function WishListPage(props) {
    const wishList = useSelector((state) => state.wishSlice.wishList);
    console.log(wishList)
    return (
        <>
            {
                wishList.length > 0 ?
                    <section className="pb-12 bg-gray">
                        <div div className="container" >
                            <ul className="flex gap-2 items-center py-4">
                                <li>
                                    <Link to={"/"} className="text-sm"><i className="icon fa fa-home" /> /</Link>
                                </li>
                                <li>
                                    <span className="text-sm">Wish-List</span>
                                </li>
                            </ul>
                            <div className="lg:grid grid-cols-4">
                                <div className="col-span-4 mt-6 lg:mt-0">
                                    <ul className="mt-6 grid grid-cols-2 gap-4 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                                        {wishList.map((item) => (
                                            <BoxProduct key={item} data={item} />
                                        ))}
                                    </ul>
                                    <div className="mt-10 flex justify-center ">
                                        <Pagination onChange={(e, page) => {
                                            console.log(page);
                                        }} count={10} variant="outlined" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> :
                    <div className='check_search'>
                        <h2>Bạn chưa có sản phẩm yêu thích</h2>
                    </div>
            }
        </>
    );
}

export default WishListPage;
