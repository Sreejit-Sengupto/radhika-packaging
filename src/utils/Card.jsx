import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Card = ({ src, title, description, btnTitle }) => {
    return (
        <div className="flex flex-col justify-center items-center w-[90%] lg:w-[20%] shadow-xl my-5 lg:my-0">
            <img
                src={src}
                alt="nothing"
                className="object-cover"
            />
            <div className="p-4">
                <p className="text-lg text-[#333333] font-semibold">{title}</p>
                <p className="text-base text-[#333333] font-normal mt-3 mb-12">
                    {description}
                </p>
                <NavLink
                    to={'/products'}
                    className={'border-2 border-[#333333] rounded px-5 py-2'}
                >
                    {btnTitle}
                </NavLink>
            </div>
        </div>
    );
};

Card.propTypes = {
    src: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    btnTitle: PropTypes.string,
};

export default Card;
