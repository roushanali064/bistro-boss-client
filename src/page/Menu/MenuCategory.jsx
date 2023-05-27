import { Link } from "react-router-dom";
import Cover from "../Shared/Cover/Cover";
import MenuItems from "../Shared/MenuItems/MenuItems";


const MenuCategory = ({items,img,title}) => {
    
    return (
        <div className="pt-20">
            {title && <Cover
                img={img}
                title={title}
                details='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum labore, ipsa vero ducimus consequuntur velit?'
            ></Cover>}
            <div className="grid md:grid-cols-2 gap-4 mt-16">
                {
                    items.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>
            <div className="flex justify-center mt-12">
                <Link to={`/order/${title}`}><button className="btn btn-outline text-[#1F2937] border-0 border-b-4 font-medium text-xl">{'ORDER YOUR FAVORITE FOOD'}</button></Link>
            </div>
        </div>
    );
};

export default MenuCategory;