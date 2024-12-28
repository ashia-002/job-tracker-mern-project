import { Link } from 'react-router-dom';
import Logo from '../assets/mainlogo.svg';
import '../styles/App.css';

const Navbar = () => {
    return (
        <header className="max-w-screen-2xl mx-auto px-20 py-6">
            <nav className="flex justify-between items-center">
                <div>
                    {/* Use <Link> for logo navigation */}
                    <Link to="/">
                        <img src={Logo} alt="Logo" />
                    </Link>
                </div>
                <div className="rounded-3xl bg-navbarBGColor px-7 py-3">
                    <ul className="flex justify-between items-center gap-5 text-textPrimaryColor font-bodyFont text-md">
                        {/* Replace <li> content with <Link> */}
                        <li>
                            <Link
                                to="/"
                                className="hover:text-teal-950 hover:font-medium"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/tracker"
                                className="hover:text-teal-950 hover:font-medium"
                            >
                                Tracker
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/explored"
                                className="hover:text-teal-950 hover:font-medium"
                            >
                                Explored
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/bookmarks"
                                className="hover:text-teal-950 hover:font-medium"
                            >
                                Bookmarked
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/profile"
                                className="hover:text-teal-950 hover:font-medium"
                            >
                                Profile
                            </Link>
                        </li>
                        {/* Button for Login */}
                        <button className="border-favoriteAccentColor border-solid">
                            <Link to="/loginPage">Login</Link>
                        </button>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
