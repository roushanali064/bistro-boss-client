import { Parallax } from 'react-parallax';

const Cover = ({ img, title, details }) => {
    return (
        <Parallax
        blur={{ min: -35, max: 35 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200}
    >
        <div>
            <div className="hero min-h-[700px]">
                <div className=""></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-7xl font-bold uppercase ">{title}</h1>
                        <p className="mb-5 text-2xl font-semibold">{details}</p>
                    </div>
                </div>
            </div>
        </div>
    </Parallax>
    );
};

export default Cover;