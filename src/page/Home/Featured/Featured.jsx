import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './feature.css'


const Featured = () => {
    return (
        <div className="text-white featured bg-fixed  my-10">
            <div className="hero-overlay bg-opacity-60 pt-8">
                <SectionTitle
                    heading={'from our meu'}
                    subHading={'check it out'}
                ></SectionTitle>
                <div className="md:flex justify-center items-center py-20 px-36 ">
                    <div>
                        <img src={featuredImg} alt="" />
                    </div>
                    <div className="md:ml-10 ">
                        <p className="text-xl">May 24,2023</p>
                        <h3 className="uppercase text-xl">WHERE CAN I GET SOME?</h3>
                        <p className="mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ea nemo quas itaque necessitatibus veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe magni fugiat repudiandae facere commodi ut.</p>
                        <button className="btn btn-outline text-white border-0 border-b-4">Button</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;