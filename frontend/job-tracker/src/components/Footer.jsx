import { Link } from 'react-router-dom';
import iconFacebook from '../assets/footerlogo/facebook-icon.svg';
import iconInstagram from '../assets/footerlogo/instra-icon.svg';
import iconWhatsApp from '../assets/footerlogo/whatsapp-icon.svg';
import iconGitHub from '../assets/footerlogo/github-icon.svg';
import iconPhone from '../assets/footerlogo/phone-icon.svg';
import '../styles/App.css';

const Footer = () => {
    return (
        <footer className="bg-favoriteAccentColor text-white py-16 px-20">
            <div className="max-w-screen-2xl mx-auto px-8">
                {/* Main Footer Section */}
                <div className="flex justify-between items-start mb-12">
                    {/* Left Section: Quote */}
                    <div className="max-w-lg">
                        <h2 className="text-2xl font-themeFont italic text-white leading-relaxed mt-98">
                            <span className='text-favoriteAccentColor02'>”</span>Simplify your job application journey and stay organized with ease.<span className='text-favoriteAccentColor02'>”</span>
                        </h2>
                    </div>

                    {/* Middle Section: Navigation */}
                    <div>
                        <h3 className="text-md text-white font-semibold mb-4 tracking-widest">NAVIGATION</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    to="/"
                                    className="hover:text-hoverButtonColor hover:font-medium"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/tracker"
                                    className="hover:text-hoverButtonColor hover:font-medium"
                                >
                                    Tracker
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/explored"
                                    className="hover:text-hoverButtonColor hover:font-medium"
                                >
                                    Explored
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/bookmarks"
                                    className="hover:text-hoverButtonColor hover:font-medium"
                                >
                                    Bookmarks
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/profile"
                                    className="hover:text-hoverButtonColor hover:font-medium"
                                >
                                    Profile
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Right Section: About Us */}
                    <div>
                        <h3 className="text-md text-white font-semibold mb-4 tracking-widest">ABOUT US</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-favoriteAccentColor02 flex items-center">
                                    <img src={iconFacebook} alt="Facebook" className="inline w-6 mr-2" />
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href="tel:+123456789" target="_blank" rel="noopener noreferrer" className="hover:text-favoriteAccentColor02 flex items-center">
                                    <img src={iconPhone} alt="Phone" className="inline w-6 mr-2" />
                                    Phone
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer" className="hover:text-favoriteAccentColor02 flex items-center">
                                    <img src={iconWhatsApp} alt="WhatsApp" className="inline w-6 mr-2" />
                                    WhatsApp
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-favoriteAccentColor02 flex items-center">
                                    <img src={iconGitHub} alt="GitHub" className="inline w-6 mr-2" />
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-favoriteAccentColor02 flex items-center">
                                    <img src={iconInstagram} alt="Instagram" className="inline w-6 mr-2" />
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Footer Section */}
                <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400 font-buttonFont flex justify-between" >
                    <div className="flex gap-8">
                        <Link
                            to="/about"
                            className="hover:text-hoverButtonColor"
                        >
                            ABOUT US
                        </Link>
                        <Link
                            to="/contact"
                            className="hover:text-hoverButtonColor"
                        >
                            CONTACT US
                        </Link>
                        <Link
                            to="/help"
                            className="hover:text-hoverButtonColor"
                        >
                            HELP
                        </Link>
                        <Link
                            to="/privacy"
                            className="hover:text-hoverButtonColor"
                        >
                            PRIVACY POLICY
                        </Link>
                        <Link
                            to="/disclaimer"
                            className="hover:text-hoverButtonColor"
                        >
                            DISCLAIMER
                        </Link>
                    </div>
                    <p className="text-gray-400">
                        © 2024 JobTracker. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
