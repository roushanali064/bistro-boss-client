

const SectionTitle = ({heading, subHading}) => {
    return (
        <div className="md:w-5/12 mx-auto my-8 text-center">
            <p className="text-xl text-[#D99904] mb-2">--- {subHading} ---</p>
            <h3 className="font-normal text-4xl uppercase border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;