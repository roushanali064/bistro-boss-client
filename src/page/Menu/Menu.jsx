import { Helmet } from "react-helmet-async";
import useMenu from "../../hooks/useMenu";
import Cover from "../Shared/Cover/Cover";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory";
import img1 from '../../assets/menu/banner3.jpg'
import img2 from '../../assets/menu/dessert-bg.jpeg'
import img3 from '../../assets/menu/pizza-bg.jpg'
import img4 from '../../assets/menu/salad-bg.jpg'
import img5 from '../../assets/menu/soup-bg.jpg'

const Menu = () => {
    const[menu]=useMenu();
    const offered= menu.filter(item=>item.category === 'offered')
    const dessert= menu.filter(item=>item.category === 'dessert')
    const pizza= menu.filter(item=>item.category === 'pizza')
    const salad= menu.filter(item=>item.category === 'salad')
    const soup= menu.filter(item=>item.category === 'soup')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover
                img={img1}
                title={'Our Menu'}
                details={'would ou like to try a dish'}
            ></Cover>
            <SectionTitle
                heading={"don't miss"}
                subHading={'To days offer'}
            ></SectionTitle>
            <MenuCategory
                items={offered}
            ></MenuCategory>
            {/* dessert */}
            <MenuCategory
            items={dessert}
            img={img2}
            title={'dessert'}
            ></MenuCategory>
            {/* pizza */}
            <MenuCategory
                items={pizza}
                img={img3}
                title={'pizza'}
            ></MenuCategory>
            {/* salad */}
            <MenuCategory
            items={salad}
            img={img4}
            title={'salad'}
            ></MenuCategory>
            {/* soup */}
            <MenuCategory
            items={soup}
            img={img5}
            title={'soup'}
            ></MenuCategory>
            
        </div>
    );
};

export default Menu;