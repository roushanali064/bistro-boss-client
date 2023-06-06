import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { ToastContainer, toast } from "react-toastify";

const imageHostingToken = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN
console.log(imageHostingToken)

const AddItem = () => {
    const { register, handleSubmit, reset } = useForm();
    const image_upload_URL = `https://api.imgbb.com/1/upload?key=${imageHostingToken}`;
    const axiosSecure = useAxiosSecure()

    const onSubmit = data => {
        console.log(data)
        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(image_upload_URL, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageResponse => {

                if (imageResponse.success) {
                    const imageUrl = imageResponse.data.display_url;
                    const { name, price, category, recipe } = data;
                    const newItem = { name, price: parseFloat(price), category, recipe, image: imageUrl }
                    console.log(newItem)
                    axiosSecure.post('/menu',newItem)
                    .then(data=>{
                        console.log('After posting new item',data.data)
                        if(data.data.acknowledged){
                            toast('New Item Add Done')
                            reset()
                        }
                    })
                }
            })
    };


    return (
        <div className=" w-full mx-auto">
            <Helmet><title>Bistro Boss || Add Item</title></Helmet>
            <SectionTitle
                subHading="what's new"
                heading='Add An Item'
            ></SectionTitle>
            <ToastContainer/>
            <div className="w-1/2 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold text-xl text-[#444444]">Recipe name*</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full " {...register("name", { required: true })} />
                    </div>
                    {/* select category */}

                    <div className="flex gap-4">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-semibold text-xl text-[#444444]">Category*</span>
                            </label>
                            <select defaultValue='pick one' {...register("category", { required: true })} className="select select-bordered">
                                <option disabled>Category</option>
                                <option>pizza</option>
                                <option>soup</option>
                                <option>dessert</option>
                                <option>salad</option>
                                <option>drink</option>
                            </select>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-semibold text-xl text-[#444444]">price*</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full " {...register("price", { required: true })} />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-xl text-[#444444]">Recipe Details*</span>
                        </label>
                        <textarea className="textarea textarea-bordered h-24" placeholder="recipe details" {...register("recipe", { required: true })}></textarea>
                    </div>
                    <input type="file" {...register("image", { required: true })} className="file-input  file-input-bordered mt-5 w-7/12 " />
                    <input className=" block px-10 py-5 mt-5 btn bg-gradient-to-r from-amber-800 to-amber-500 border-none" type="submit" value={'Add Item'} />
                </form>
            </div>
        </div>
    );
};

export default AddItem;