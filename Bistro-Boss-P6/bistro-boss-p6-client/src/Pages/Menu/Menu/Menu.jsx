import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from "../../../Hook/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {

    const [menu] = useMenu();
    const desserts = menu.filter(item=> item.category === 'dessert')
    const pizza = menu.filter(item=> item.category === 'pizza')
    const soup = menu.filter(item=> item.category === 'soup')
    const salad = menu.filter(item=> item.category === 'salad')
    const offered = menu.filter(item=> item.category === 'offered')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>
            <Cover img={menuImg} title={"Our Menu"}></Cover>
            {/* Main cover */}
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* desert menu items */}
            <MenuCategory items={desserts}title="dessert"img={dessertImg}></MenuCategory>
            {/* Pizza menu item */}
            <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
            {/* Salads menu item */}
            <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>
            {/* Soup menu item */}
            <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;