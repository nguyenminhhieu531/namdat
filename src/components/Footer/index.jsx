import { FacebookPage } from '../FacebookPage/FacebookPage';
import GoogleMap from '../GoogleMap/GoogleMap';

function Footer() {
    return (
        <footer className="bg-gray-100 py-12">
            <div className="container">
                {/* Grid 2 cột cho md (iPad) và lg (desktop) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-24">
                    
                    {/* Cột 1: Số điện thoại + Maps */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Liên hệ</h3>
                        <ul className="space-y-4">
                            <li>
                                <p>
                                    Số điện thoại:{" "}
                                    <a href="tel:0326569346" className="hover:underline text-blue-600">
                                        0326569346
                                    </a>
                                </p>
                            </li>
                            <li>
                                <p>
                                    Địa chỉ:{" "}
                                    <GoogleMap />
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* Cột 2: Facebook Page */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Kết nối với chúng tôi</h3>
                        <FacebookPage />
                    </div>
                </div>

                {/* Footer bản quyền */}
                <div className="mt-12">
                    <p className="text-sm text-gray-600 text-center">
                        Bản quyền thuộc cửa hàng nhựa Nam Đất
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
