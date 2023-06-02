import { Helmet } from "react-helmet-async";
import useCarts from "../../../hooks/useCarts";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";


const MyCart = () => {
    const [carts,refetch] = useCarts();
    const total = carts.reduce((sum, item) => item.price + sum, 0);
    const handleDelete=item=>{
        Swal.fire({
            title: 'Are you sure?',
            text: `Do You Want To Delete ${item.name}!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://bistro-boss-server-phi.vercel.app/carts/${item._id}`,{
                    method: 'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.deletedCount > 0){
                        refetch()
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                    }
                })
             
            }
          })
    }

    return (
        <div className="w-full">
            <Helmet>
                <title>Bistro Boss | My Carts</title>
            </Helmet>
            <SectionTitle
                heading='WANNA ADD MORE?'
                subHading='My Cart'
            ></SectionTitle>
            <div className="uppercase w-full mx-auto">
                <div className="flex justify-evenly items-center text-[#151515] text-3xl font-bold">
                    <h3>Total orders: {carts.length}</h3>
                    <h3>Total price: ${total}</h3>
                    <button className="btn bg-[#D1A054] border-none">Pay</button>
                </div>
                <div className="overflow-x-auto flex justify-center mt-[38px]">
                    <table className="table" >
                        {/* <!-- head --> */}
                        <thead className="text-white">
                            <tr>
                                <th className="bg-[#D1A054]">
                                    #
                                </th>
                                <th className="bg-[#D1A054]">ITEM IMAGE</th>
                                <th className="bg-[#D1A054]">ITEM NAME</th>
                                <th className="bg-[#D1A054]">PRICE</th>
                                <th className="bg-[#D1A054]">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                carts.map((item,index)=><tr
                                key={item._id}
                                >
                                    <td>
                                        {index +1}
                                    </td>
                                    <td>
                                    <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td className="text-right">${item.price}</td>
                                    <th>
                                        <button onClick={()=>handleDelete(item)} className="btn bg-red-700 border-none">
                                            <FaTrashAlt/>
                                        </button>
                                    </th>
                                </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;