import { Link } from 'react-router-dom';

function HeaderLogo() {
    return (
        <>
            <h1 className="flex-shrink-0 mr-5">
                <Link to={"/"} className="block max-w-[130px]" >
                    <img className="max-w-full" src="/assets/images/logo.png" alt="" style={{width: "100px", height: "100px"}}/>
                </Link>
            </h1>
        </>
    );
}

export default HeaderLogo;