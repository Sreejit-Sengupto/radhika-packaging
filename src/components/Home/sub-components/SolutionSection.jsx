import Card from '../../../utils/Card';

const SolutionSection = () => {
    return (
        <div className="lg:h-screen flex flex-col justify-evenly items-center">
            <p className="text-center text-[#CB2027] font-lato text-3xl lg:text-4xl my-12 lg:my-0">
                Solutions for Your Product Packaging
            </p>
            <div className="flex flex-col lg:flex-row justify-evenly items-center">
                <Card
                    src={'/img/card-img.svg'}
                    title={'Flexible Packaging Materials & Machinery'}
                    description={
                        'Impact your revenue growth and lower your operating costs with flexible packaging supplies including packaging materials, machinery, and parts that Industrial Packaging sources for you.'
                    }
                    btnTitle={'View Products'}
                />
                <Card
                    src={'/img/card-img.svg'}
                    title={'Local Packaging Machinery Support'}
                    description={
                        'Your production needs to run smoothly. Source certified Service Technicians to provide technical support for all of your packaging machinery, for businesses located in the Northeastern United States.'
                    }
                    btnTitle={'View Technical Services'}
                />
                <Card
                    src={'/img/card-img.svg'}
                    title={'Contract Packaging & Supply Chain Services'}
                    description={
                        'Meet all the quality and production requirements of your customers with turn-key, certified contract packaging solutions that can support your supply chain, allowing you to focus on what you do best. Let us do the rest.'
                    }
                    btnTitle={'View Outsourcing Solutions'}
                />
            </div>
        </div>
    );
};

export default SolutionSection;
