import HeaderLogo from './HeaderLogo';
import HeaderMenu from './HeaderMenu';

function Header() {
    return (
        <>
            {/* Ẩn trên mobile (hidden), chỉ hiện từ lg trở lên (lg:flex) */}
            <header className=" sticky top-0 z-10 bg-white shadow-lg">
                <div className="container flex items-center">
                    <HeaderLogo /> 
                    {/* <HeaderSearch /> */} 
                    <HeaderMenu /> 
                    {/* <HeaderProfile /> */}
                </div>
            </header>
        </>
    );
}

export default Header;
