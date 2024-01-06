import { NavLink } from 'react-router-dom';

function Banner() {
    return (
        <div className="bg-home-banner bg-cover bg-no-repeat bg-center w-full h-[100dvh] lg:h-screen flex flex-col lg:flex-row justify-center items-center font-lato">
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                    <p className="w-[90%] lg:w-[50%] text-5xl font-bold">
                        Customized Flexible Packaging Solutions
                    </p>
                    <p className="w-[90%] lg:w-[50%] text-base text-[#00000099] mt-2">
                        Source packaging materials, machinery, and supply chain
                        services with reliability, timeliness, and efficiency
                        for your manufacturing or distribution business.
                    </p>
                </div>
                <div className="w-[90%] lg:w-[50%] flex flex-col lg:flex-row justify-between items-center mt-10">
                    <NavLink
                        to={'/'}
                        className={
                            'bg-[#CB2027] text-white px-14 py-2 rounded mb-5 lg:mb-0'
                        }
                    >
                        Contact Now
                    </NavLink>
                    <NavLink
                        to={'/products'}
                        className={
                            'text-black px-4 py-2 border border-black rounded lg:mr-24'
                        }
                    >
                        Check out our Products
                    </NavLink>
                </div>
            </div>
            <div className="w-[300px] h-[300px]"></div>
        </div>
    );
}

export default Banner;
