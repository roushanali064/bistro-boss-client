import MenuItems from "../Shared/MenuItems/MenuItems";
import useMenu from "../../hooks/useMenu";


const PopularMenu = ({btnText}) => {
    const [menu]=useMenu()
    const popular = menu.filter(item=>item.category === 'popular')
   
    return (
        <section className="mb-28">
            <div className="grid md:grid-cols-2 gap-4">
                {
                    popular.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>
            <div className="flex justify-center mt-12">
                <button className="btn btn-outline text-[#1F2937] border-0 border-b-4 font-medium text-xl">{btnText}</button>
            </div>
        </section>
    );
};

export default PopularMenu;