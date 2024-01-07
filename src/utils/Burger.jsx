import React from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

const Burger = () => {
    const [open, setOpen] = React.useState(false);

    const toggleBurger = () => {
        setOpen(!open);
    };

    return (
        <div className="lg:hidden">
            <div className="flex justify-between items-center p-2">
                <NavLink to={'/'}>Logo</NavLink>
                <button onClick={toggleBurger}>
                    {open ? (
                        <AiOutlineClose size={'2em'} />
                    ) : (
                        <HiMenu size={'2em'} />
                    )}
                </button>
            </div>
            {open && (
                <div className="bg-white flex flex-col justify-center items-center absolute left-0 right-0 mx-auto">
                    <NavLink
                        to={'/products'}
                        className={'my-2'}
                        onClick={toggleBurger}
                    >
                        Products
                    </NavLink>
                    <NavLink
                        to={'/services'}
                        className={'my-2'}
                        onClick={toggleBurger}
                    >
                        Services
                    </NavLink>
                    <NavLink
                        to={'/about'}
                        className={'my-2'}
                        onClick={toggleBurger}
                    >
                        About Us
                    </NavLink>
                    <NavLink
                        to={'/blogs'}
                        className={'my-2'}
                        onClick={toggleBurger}
                    >
                        Blogs
                    </NavLink>
                    <NavLink
                        to={'/'}
                        className={
                            'bg-[#CB2027] text-white px-10 py-2 rounded mb-5'
                        }
                    >
                        Contact Now
                    </NavLink>
                </div>
            )}
        </div>
    );
};

export default Burger;
