import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function HeaderMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const listMenus = [
        { title: "Trang chủ", to: "/" },
        { title: "Sản phẩm", to: "/san-pham" },
        { title: "Tin tức", to: "/tin-tuc" },
        { title: "Liên hệ", to: "/lien-he" },
    ];

    return (
        <>
            {/* Menu PC */}
            <nav className="hidden lg:block ml-auto mr-28">
                <ul className="flex items-center gap-10">
                    {listMenus.map((item) => (
                        <li
                            key={item.to}
                            className="relative after:absolute after:h-[1.5px] after:bg-black after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 after:w-full after:scale-x-0 hover:after:scale-x-100"
                        >
                            <NavLink to={item.to} className="text-gray-700 hover:text-blue-600">
                                {item.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Nút hamburger Mobile */}
            <div className="block lg:hidden ml-auto">
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Menu xổ xuống Mobile */}
                {isOpen && (
                    <div className="absolute top-16 right-0 left-0 bg-white shadow-lg rounded-lg w-full p-4 z-50">
                        <ul className="flex flex-col">
                            {listMenus.map((item, index) => (
                                <li style={{ borderColor: "#c4c4c4ff" }}
                                    key={item.to}
                                    className={`py-3 p-3 ${index !== listMenus.length - 1 ? "border-b border-gray-200" : ""
                                        }`}
                                >
                                    <NavLink
                                        to={item.to}
                                        onClick={() => setIsOpen(false)}
                                        className="block text-gray-700 hover:text-blue-600"
                                    >
                                        {item.title}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>

                    </div>
                )}
            </div>
        </>
    );
}

export default HeaderMenu;
