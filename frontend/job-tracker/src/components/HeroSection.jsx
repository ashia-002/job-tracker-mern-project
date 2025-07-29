import { Link } from "react-router-dom";

const HeroSection = ({ isLoggedIn }) => {
    return (
        <div className=" text-center py-16 px-28" >
            <div className="max-w-4xl mx-auto text-left">
                {/* Title */}
                <h1 className="text-6xl font-semibold text-textPrimaryColor mb-4 leading-tight">
                    Track Your Job Application
                    with <span className="text-textThemeColor font-themeFont">Ease</span>
                </h1>

                {/* Subheading */}
                <p className="text-textSecondary01Color text-xl mb-10 leading-relaxed">
                    Manage your job applications, bookmark opportunities, and stay
                    on top of every stage of the process—all in one place.
                </p>
            </div>
            {isLoggedIn ? (
                <button className="bg-primaryButtonColor hover:bg-hoverButtonColor text-white py-3 px-6 rounded-lg">
                    <Link to="/tracker">Go to Tracker</Link>
                </button>
            ) : (
                <button className="bg-primaryButtonColor hover:bg-hoverButtonColor text-white py-3 px-6 rounded-lg">
                    <Link to="/login">Let's get started</Link>
                </button>
            )}
        </div>
    );
};

export default HeroSection;