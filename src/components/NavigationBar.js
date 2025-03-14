import React from 'react';
import { Navbar, Typography} from "@material-tailwind/react";
import {Heart, Home} from "iconoir-react";
import {Link} from "react-router-dom";

const NavigationBar = () => {
    return (
        <Navbar className=" mx-auto w-full max-w-screen-xl text-black bg-white">
            <div className="flex items-center">
                <Typography
                    as="a"
                    href="/"
                    type="small"
                    className="ml-2 mr-2 block py-1 font-semibold"
                >
                    Quote Generator
                </Typography>
                <hr className="ml-1 mr-1.5 h-5 w-px border-l border-t-0 border-secondary-dark lg:block" />
                
                <div className="">
                    <ul className="flex flex-col gap-x-3 gap-y-1.5 lg:mt-0 lg:flex-row lg:items-center">
                        <li>
                            <Typography
                                as={Link}
                                to="/favorite"
                                type="small"
                                className="flex items-center p-1 hover:text-primary"
                            >
                                <Heart className="h-4 w-4" />
                                <span className="font-semibold">Favorite</span>
                            </Typography>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <ul className="flex flex-col gap-x-3 gap-y-1.5 lg:mt-0 lg:flex-row lg:items-center">
                        <li>
                            <Typography
                                as={Link}
                                to="/"
                                type="small"
                                className="flex items-center p-1 hover:text-primary"
                            >
                                <Home className="h-4 w-4" />
                                <span className="font-semibold">Home</span>
                            </Typography>
                        </li>
                    </ul>
                </div>
            </div>
        </Navbar>
    )
}

export default NavigationBar