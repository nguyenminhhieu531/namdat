import React from 'react';

function Shipping() {
    return (
        <>
            <section className="bg-gray-shipping">
                <div className="container text-center">
                    
                    {/* Tiêu đề chính */}
                    <h2 className="pt-6 text-3xl md:text-4xl font-bold text-gray-800 tracking-wide uppercase">
                        Hiệu buôn Nam Đất
                    </h2>

                    {/* Mô tả ngắn */}
                    <p className="mt-3 text-lg italic text-gray-600 max-w-2xl mx-auto">
                        ( chuyên gốm sứ, nhôm nhựa, thùng xốp, bao bì, bánh tráng, vàng mã ) 
                    </p>

                    {/* Liên hệ */}
                    <div className="mt-4 space-y-2">
                        <p className="text-lg text-gray-700">
                            Số điện thoại mua hàng:{" "}
                            <a href="tel:0326569346" className="text-blue-600 hover:underline">
                                0326569346
                            </a>
                        </p>
                        <p className="text-lg text-gray-700">
                            Facebook mua hàng:{" "}
                            <a
                                href="https://www.facebook.com/viet.dao.10690"
                                className="text-blue-600 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Chi Việt Tú
                            </a>
                        </p>
                    </div>

                    {/* Icon shipping */}
                    <ul className="grid grid-cols-2 lg:grid-cols-2 gap-5 items-center py-14">
                        <li className="flex items-center lg:justify-center lg:flex-1 gap-4">
                            <img src="/assets/images/ico_freeship.svg" alt="" className="w-10 h-10"/>
                            <span className="text-sm lg:text-base font-semibold">
                                Vận chuyển hàng tận nhà
                            </span>
                        </li>
                        <li className="flex items-center lg:justify-center lg:flex-1 gap-4">
                            <img src="/assets/images/ico_quality.svg" alt="" className="w-10 h-10"/>
                            <span className="text-sm lg:text-base font-semibold">
                                Đảm bảo chất lượng
                            </span>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}

export default Shipping;
