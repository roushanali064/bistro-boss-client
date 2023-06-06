import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const axiosSecure = useAxiosSecure();

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: `You won't to delete ${item.name} !`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/menu/${item._id}`)
                    .then(res => {
                        console.log('deleted response', res.data)
                        refetch()
                        if (res.data.deletedCount > 0) {
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
        <div>
            <Helmet><title>Bistro Boss || Manage All Items</title></Helmet>
            <SectionTitle heading='manage all items' subHading='hurry up'></SectionTitle>
            <div className="uppercase w-full mx-auto">
                <div className="flex justify-evenly items-center text-[#151515] text-3xl font-bold">
                    <h3>Total Items: {menu.length}</h3>

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
                                <th className="bg-[#D1A054]">ACTION</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((item, index) => <tr
                                    key={item._id}
                                >
                                    <td>
                                        {index + 1}
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
                                    <td>
                                        <button className="btn bg-red-700 border-none">
                                            update
                                        </button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(item)} className="btn bg-red-700 border-none">
                                            <FaTrashAlt />
                                        </button>
                                    </td>
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

export default ManageItems;