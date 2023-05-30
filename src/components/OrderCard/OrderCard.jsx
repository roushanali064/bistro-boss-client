import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";


const OrderCard = ({ item }) => {
    const {user}=useContext(AuthContext);
    const { name, image, price, recipe, _id } = item;
    const handleAddToCarte=(item)=>{
        if(user && user.email){
            const cartMenu={menuItemId:_id,name,image,price,email:user.email}
            fetch('http://localhost:5000/carts',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartMenu)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.insertedId){
                    toast('Menu add Successful')
                }
                else{
                    toast('something wrong tray again')
                }
            })
        }

    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl space-y-6">
            <ToastContainer/>
            <figure><img src={image} alt="menu" /></figure>
            <p className="bg-[#111827] absolute  right-5 text-white ml-5 mt-5 px-4 py-2 ">${price}</p>
            <div className="card-body text-center space-y-6">
                <div className='flex justify-center'>
                    <h2 className="card-title text-[#151515] font-semibold text-2xl">{name}</h2>
                </div>
                <p className='text-[#151515]'>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={()=>handleAddToCarte(item)} className="btn  uppercase text-[#BB8506] bg-[#E8E8E8] border-0 border-b-4 border-[#BB8506]">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;