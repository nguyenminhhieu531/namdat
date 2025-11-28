import { FacebookPage } from '../FacebookPage/FacebookPage';
import GoogleMap from '../GoogleMap/GoogleMap';

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="container">
                {/* Grid cột */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">

                    {/* Cột 1: Liên hệ */}
                    <div>
                        <h3 className="font-bold text-xl text-white mb-6 border-l-4 border-blue-500 pl-3">
                            Liên hệ
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <p>
                                    📞 Số điện thoại:{" "}
                                    <a
                                        href="tel:0326569346"
                                        className="text-blue-400 hover:text-blue-500 transition-colors"
                                    >
                                        0326569346
                                    </a>
                                </p>
                            </li>
                            <li>
                                <p className="mb-2">📍 Địa chỉ:</p>
                                <div className="rounded-lg overflow-hidden shadow-md border border-gray-700">
                                    <GoogleMap />
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Cột 2: Facebook Page (chỉ mobile) */}
                    <div className="block lg:hidden">
                        <h3 className="font-bold text-xl text-white mb-6 border-l-4 border-blue-500 pl-3">
                            Kết nối với chúng tôi
                        </h3>
                        <div className="rounded-lg overflow-hidden shadow-md border border-gray-700">
                            <FacebookPage />
                        </div>
                    </div>

                </div>

                {/* Footer bản quyền */}
                <div className="mt-12 border-gray-700 text-center">
                    <p className="text-sm text-gray-500">
                        © 2025 Cửa hàng Nam Đất. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
