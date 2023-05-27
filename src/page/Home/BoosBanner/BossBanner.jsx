import bgimg from '../../../assets/home/chef-service.jpg'

const BossBanner = () => {
    return (
        <section className='mb-28 mt-20'>
            <div className="hero min-h-screen bg-fixed" style={{ backgroundImage: `url(${bgimg})` }}>
                <div className=""></div>
                <div className="hero-content text-center px-4 py-6 md:px-80 bg-white text-black md:py-24">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-normal">Bistro Boss</h1>
                        <p className="hidden sm:block">ntroducing Bistro Boss: Elevating Culinary Excellence
                            Savor the Artistry of Gourmet Delights
                            Indulge in Exquisite Flavors, Crafted with Passion
                            Discover a Gastronomic Journey like No Other
                            Unleash Your Inner Food Connoisseur
                            Satisfy Your Cravings with Culinary Brilliance.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BossBanner;