import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PopularMenu from "../../PopularMenue/PopularMenu";
import Banner from "../Banner/Banner";
import BossBanner from "../BoosBanner/BossBanner";
import Call from "../Call/Call";
import Categories from "../Categories/Categories";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import '@smastrom/react-rating/style.css'
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Categories></Categories>
            <BossBanner></BossBanner>
            <div className="mb-28">
            <SectionTitle
                heading={'from our menu'}
                subHading={'check it out'}
            ></SectionTitle>
            <PopularMenu
            btnText={'View Full Menu'}
            ></PopularMenu>
            </div>
            <Call></Call>
            <ChefRecommends />
            <Featured />
            <Testimonials />
        </div>
    );
};

export default Home;