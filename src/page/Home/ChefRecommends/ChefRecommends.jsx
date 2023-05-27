import img1 from '../../../assets/menu/salad-bg.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const ChefRecommends = () => {
    return (
        <div className='my-28'>
            <SectionTitle
            subHading={'should try'}
            heading={'CHEF RECOMMENDS'}
            ></SectionTitle>
            <div className='md:grid md:grid-cols-3 gap-5 flex flex-col justify-center items-center'>
                <div className="card w-96 bg-base-100 shadow-xl space-y-6">
                    <figure><img src={img1} alt="Shoes" /></figure>
                    <div className="card-body text-center space-y-6">
                        <div className='flex justify-center'>
                            <h2 className="card-title text-[#151515] font-semibold text-2xl">Caeser Salad</h2>
                        </div>
                        <p className='text-[#151515]'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="btn  uppercase text-[#BB8506] bg-[#E8E8E8] border-0 border-b-4 border-[#BB8506]">Add To Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl space-y-6">
                    <figure><img src={img1} alt="Shoes" /></figure>
                    <div className="card-body text-center space-y-6">
                        <div className='flex justify-center'>
                            <h2 className="card-title text-[#151515] font-semibold text-2xl">Caeser Salad</h2>
                        </div>
                        <p className='text-[#151515]'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="btn  uppercase text-[#BB8506] bg-[#E8E8E8] border-0 bg-[#1F2937]">Add To Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl space-y-6">
                    <figure><img src={img1} alt="Shoes" /></figure>
                    <div className="card-body text-center space-y-6">
                        <div className='flex justify-center'>
                            <h2 className="card-title text-[#151515] font-semibold text-2xl">Caeser Salad</h2>
                        </div>
                        <p className='text-[#151515]'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="btn  uppercase text-[#BB8506] bg-[#E8E8E8] border-0 border-b-4 border-[#BB8506]">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefRecommends;