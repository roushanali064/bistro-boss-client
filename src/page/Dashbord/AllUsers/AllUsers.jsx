import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users');
        return res.json()
    })

    const handleMakeAdmin = user => {
        console.log(user)
        fetch(`http://localhost:5000/user/admin/${user._id}`,{
            method:'PATCH'
        })
        .then(res=>res.json())
        .then(data=>{
            refetch()
            console.log(data)
            if(data.modifiedCount){
                Swal.fire(
                    `${user.name} is admin now`,
                    'You clicked the button!',
                    'success'
                  )
            }
        })
    }

    const handleDelete = (user) => {
        Swal.fire({
            title: 'Are you sure?',
            text: `You won't be delete ${user.name}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/user/${user._id}`,{
                    method: 'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    refetch()
                    console.log(data)
                    if(data.deletedCount>0){
                        Swal.fire(
                            'Deleted!',
                            'The User has been deleted.',
                            'success'
                          )
                    }
                })
            }
          })
    }

    return (
        <div>
            <Helmet><title>Bistro Boss | All Users</title></Helmet>
            <SectionTitle
                heading='manage all users'
                subHading='How many??'
            ></SectionTitle>
            {/* man content */}
            <h3 className="text-2xl font-bold my-4 md:ml-44 text-center md:text-left">Total users: {users.length}</h3>
            <div className="flex justify-center items-center">
                <div>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead className="text-white text-2xl font-semi-bold">
                                <tr>
                                    <th className="bg-[#D1A054]">#</th>
                                    <th className="bg-[#D1A054]">NAME</th>
                                    <th className="bg-[#D1A054]">EMAIL</th>
                                    <th className="bg-[#D1A054]">ROLE</th>
                                    <th className="bg-[#D1A054]">ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, index) => <tr key={user._id}>
                                        <th>{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{
                                            user.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)} className="btn bg-red-700 border-none"><FaUsers /></button>
                                        }</td>
                                        <td><button onClick={() => handleDelete(user)} className="btn bg-red-700 border-none">
                                            <FaTrashAlt />
                                        </button></td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;