import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function NavBar() {
    return (
        <nav className="m-4 flex justify-around items-center p-4 bg-gray-100 border  rounded-lg shadow text-2xl  font-extralight">
            <div className="hover:underline">
                <Link to="/">
                    <img
                        className="sm:w-20 sm:h-20 w-10 h-10 hover:scale-105 transition-all opacity-70"
                        src={logo}
                        alt={logo}
                    />
                </Link>
            </div>
            <ul className="flex justify-around items-center sm:gap-10 gap-4">
                <li className="hover:underline sm:text-xl text-lg">
                    <Link to="/teams">Teams</Link>
                </li>
                <li>
                    <button className="hover:bg-gray-200 transition-all border-gray-400 border text-black  shadow rounded-full p-4 py-1 sm:text-xl text-lg">
                        <a
                            href="https://github.com/SuperMoooo"
                            target="_blank"
                            className="uppercase"
                        >
                            GitHub
                        </a>
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
