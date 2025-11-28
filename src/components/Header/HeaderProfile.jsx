import  { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

function HeaderProfile() {
    const { wishList } = useSelector((state) => state.wishSlice)
    console.log(wishList)

    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Kiểm tra nếu người dùng đã lưu trạng thái trước đó
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        // Lấy phần tử `.main`
        const mainElement = document.querySelector('.main_home');

        if (mainElement) {
            if (isDarkMode) {
                // Thêm class 'dark-mode' vào `.main`
                mainElement.classList.add("dark-mode");
                localStorage.setItem("theme", "dark");

                // Loại bỏ class 'bg-gray' khỏi các phần tử
                const grayElements = document.querySelectorAll('.bg-gray');
                grayElements.forEach((el) => {
                    el.classList.remove('bg-gray');
                });
            } else {
                // Xóa class 'dark-mode' khỏi `.main`
                mainElement.classList.remove("dark-mode");
                localStorage.setItem("theme", "light");

                // Thêm lại class 'bg-gray' vào các phần tử cần thiết
                const grayElements = document.querySelectorAll('[data-original-class~="bg-gray"]');
                grayElements.forEach((el) => {
                    el.classList.add('bg-gray');
                });
            }
        }
    }, [isDarkMode]);


    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };
    return (
        <>
            <div className="flex items-center gap-6 ml-auto lg:ml-0 shrink-0">
                <li style={{ listStyle: "none" }}>
                    <div className="App">
                        Trang chủ
                    </div>
                </li>
            </div>
        </>
    );
}

export default HeaderProfile;