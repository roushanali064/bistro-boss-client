

const MenuItems = ({ item }) => {
    const { name, image, price, recipe } = item;

    return (
        <div className="flex space-x-8">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[118px] h-[104px]" src={image} alt="" />
            <div>
                <h3 className="text-xl text-[#151515] uppercase">{name}</h3>
                <p className="text-[#737373]">{recipe}</p>
            </div>
            <p className="text-xl text-[#BB8506]">${price}</p>
        </div>
    );
};

export default MenuItems;