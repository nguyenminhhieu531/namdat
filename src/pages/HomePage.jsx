import Shipping from '../components/Shipping';
import Bestseller from '../components/Bestseller';
import NewArrivalsProduct from '../components/NewArrivalsProduct';
import OurCategoriesCenter from '../components/OurCategoriesCenter';

function HomePage() {
    return (
        <div className='main_home'>
            <Shipping />
            <OurCategoriesCenter />
            <Bestseller />
            <NewArrivalsProduct />
        </div>
    );
}

export default HomePage;
